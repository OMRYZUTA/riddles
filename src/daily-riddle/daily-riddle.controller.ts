import {Controller, Get, Logger} from '@nestjs/common';
import {DailyRiddleService} from "./daily-riddle.service";

@Controller('daily_riddle')
export class DailyRiddleController {
    constructor(private dailyriddleService: DailyRiddleService) {
    }
    @Get()
    async getDailyRiddle(){
        const dailyRiddle =  await this.dailyriddleService.getDailyRiddle()
        Logger.log(`dailyRiddle id : ${dailyRiddle!.id}`)
        const miscData = this.getMiscData()
        return{payload:{
            dailyRiddle,
                miscData
            }}

    }

    private getMiscData() {
        return {linkToShare:`http://localhost:3015/daily_riddle`}
    }
}
