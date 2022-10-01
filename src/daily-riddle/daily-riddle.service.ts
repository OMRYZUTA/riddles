import {Injectable} from '@nestjs/common';
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
            await this.activateNewRiddle();
        } else {
            if(await this.riddlePeriodSerivce.isValidPeriod(riddlePeriod.id)){
                this.dailyRiddle = await this.riddleService.findOne(riddlePeriod.riddleId)
            }else{
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
            await this.riddlePeriodSerivce.startNewPeriod(selectedRiddle.id)
            this.dailyRiddle = selectedRiddle
        } else {
            console.log('Error! no available riddle!!')
        }
    }
}
