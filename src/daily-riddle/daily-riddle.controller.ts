import {Controller, Get, Logger} from '@nestjs/common';
import {DailyRiddleService} from "./daily-riddle.service";

@Controller('daily_riddle')
export class DailyRiddleController {
    constructor(private dailyriddleService: DailyRiddleService) {
    }
    @Get()
    async getDailyRiddle(){
        const dailyRiddlePayload =  await this.dailyriddleService.getDailyRiddlePayload()
        Logger.log(`dailyRiddle id : ${dailyRiddlePayload.dailyRiddle!.id}`)
        const miscData = {...this.getMiscData(), riddlePhoto: dailyRiddlePayload.riddlePhoto}
        return{payload:{
                dailyRiddle: dailyRiddlePayload.dailyRiddle,
                miscData
            }}

    }

    private getMiscData() {

        return {linkToShare:`https://zutariddles.click/`}
    }
}
