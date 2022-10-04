import {Injectable, Logger} from '@nestjs/common';
import {RiddlePeriodService} from "../riddle-period/riddle-period.service";
import {RiddleService} from "../riddle/riddle.service";
import {RiddleEntity} from "../db/entity/riddle.entity";

@Injectable()
export class DailyRiddleService {
    private dailyRiddle: RiddleEntity | null

    constructor(private riddlePeriodSerivce: RiddlePeriodService,
                private riddleService: RiddleService) {
    }

    async getDailyRiddle() {
        let riddlePeriod = await this.riddlePeriodSerivce.fetchActiveRiddle()
        if (riddlePeriod == undefined) {
            Logger.error('No Active Riddle period')
            await this.activateNewRiddle();
        } else {
            if(await this.riddlePeriodSerivce.isValidPeriod(riddlePeriod.id)){
                Logger.log(`Fetching Active riddle, riddle id: ${riddlePeriod.riddleId} riddle period id: ${riddlePeriod.id}`)
                this.dailyRiddle = await this.riddleService.findOne(riddlePeriod.riddleId)
            }else{
                Logger.log(`Riddle period time passed, dissabling riddle ${riddlePeriod.riddleId}, and riddle period ${riddlePeriod.id}`)
                await this.riddleService.disableRiddle(riddlePeriod.riddleId)
                await this.riddlePeriodSerivce.endPeriod(riddlePeriod.id)
                await this.activateNewRiddle();
            }
        }

        return this.dailyRiddle
    }

    async  activateNewRiddle() {
        let selectedRiddle = await this.riddleService.getNewRiddle()
        if (selectedRiddle != undefined) {
            Logger.log(`Activating new Riddle, id: ${selectedRiddle.id}`)
            await this.riddlePeriodSerivce.startNewPeriod(selectedRiddle.id)
            this.dailyRiddle = selectedRiddle
        } else {
            Logger.error('Error! no available riddle!!')
        }
    }
}
