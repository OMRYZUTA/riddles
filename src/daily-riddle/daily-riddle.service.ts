import {Injectable, Logger} from '@nestjs/common';
import {RiddlePeriodService} from "../riddle-period/riddle-period.service";
import {RiddleService} from "../riddle/riddle.service";
import {RiddleEntity} from "../db/entity/riddle.entity";
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";
import {RiddlePhotoService} from "../riddle-photo/riddle-photo.service";

@Injectable()
export class DailyRiddleService {
    private dailyRiddle: RiddleEntity | null
    private currentRiddlePeriod: RiddlePeriodEntity | null
    private dailyPhotoUrl: string | null

    constructor(private riddlePeriodSerivce: RiddlePeriodService,
                private riddleService: RiddleService,
                private riddlePhotoService: RiddlePhotoService) {
    }
    public async getDailyRiddlePayload(){
        let dailyRiddle = await this.getDailyRiddle()
        let riddlePhoto = await this.getDailyPhoto()
        return{dailyRiddle, riddlePhoto}
    }

    async getDailyRiddle() {
        if (this.currentRiddlePeriod == undefined) {// maybe the server was down
            this.currentRiddlePeriod = await this.riddlePeriodSerivce.fetchActiveRiddle()
            if (this.currentRiddlePeriod == undefined) { // no active riddle period
                Logger.log('No Active Riddle period')
                await this.activateNewRiddle();
            }
        }
        if(this.currentRiddlePeriod == undefined){
            throw  new Error('cannot create new riddle period')
        }
        if (await this.riddlePeriodSerivce.isValidPeriod(this.currentRiddlePeriod)) {
            this.dailyRiddle = await this.riddleService.findOne(this.currentRiddlePeriod.riddleId)
            Logger.log(`Fetching Active riddle, riddle id: ${this.currentRiddlePeriod.riddleId} riddle period id: ${this.currentRiddlePeriod.id}`)
        } else {
            Logger.log(`Riddle period time passed, disabling riddle ${this.currentRiddlePeriod.riddleId}, and riddle period ${this.currentRiddlePeriod.id}`)
            await this.riddleService.disableRiddle(this.currentRiddlePeriod.riddleId)
            await this.riddlePeriodSerivce.endPeriods(this.dailyRiddle?.id)
            await this.activateNewRiddle();
        }

        return this.dailyRiddle
    }

    async activateNewRiddle() {
        let selectedRiddle = await this.riddleService.getNewRiddle()
        if (selectedRiddle != undefined) {

            Logger.log(`Activating new Riddle, id: ${selectedRiddle.id}`)
            this.currentRiddlePeriod = await this.riddlePeriodSerivce.startNewPeriod(selectedRiddle.id)
            this.dailyRiddle = selectedRiddle
        } else {
            Logger.error('Error! no available riddle!!')
        }
    }

    private async getDailyPhoto() {
        if(this.dailyPhotoUrl == undefined){
            this.dailyPhotoUrl = await this.riddlePhotoService.getPhoto(this.dailyRiddle?.answer)
        }
        return this.dailyPhotoUrl
    }
}
