import { Injectable } from '@nestjs/common';
import {RiddlePeriodService} from "../riddle-period/riddle-period.service";
import {RiddleService} from "../riddle/riddle.service";

@Injectable()
export class DailyRiddleService {
    constructor(private riddlePeriodSerivce: RiddlePeriodService,
                private riddleService: RiddleService)
    {}
    async getDailyRiddle(){
        let riddlePeriod = await this.riddlePeriodSerivce.fetchActiveRiddle()
        return await this.riddleService.findOne( riddlePeriod.riddleId)
    }
}
