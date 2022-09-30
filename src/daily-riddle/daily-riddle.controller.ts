import {Controller, Get} from '@nestjs/common';
import {DailyRiddleService} from "./daily-riddle.service";

@Controller('daily_riddle')
export class DailyRiddleController {
    constructor(private dailyriddleService: DailyRiddleService) {
    }
    @Get()
    getDailyRiddle(){
        return this.dailyriddleService.getDailyRiddle()
    }
}
