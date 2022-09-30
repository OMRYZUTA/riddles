import { Module } from '@nestjs/common';
import { DailyRiddleController } from './daily-riddle.controller';
import { DailyRiddleService } from './daily-riddle.service';
import {RiddlePeriodModule} from "../riddle-period/riddle-period.module";
import {RiddleModule} from "../riddle/riddle.module";

@Module({
  imports:[RiddlePeriodModule, RiddleModule],
  controllers: [DailyRiddleController],
  providers: [DailyRiddleService]
})
export class DailyRiddleModule {}
