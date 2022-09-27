import {Controller, Get} from '@nestjs/common';
import {RiddleService} from "./riddle.service";

@Controller('daily_riddle')
export class RiddleController {
    constructor(private riddleService: RiddleService) {
    }
    @Get()
    getDailyRiddle(){
        return this.riddleService.getDailyRiddle()
    }
}
