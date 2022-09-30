import { Module } from '@nestjs/common';
import { RiddlePeriodService } from './riddle-period.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";

@Module({
  imports: [TypeOrmModule.forFeature([RiddlePeriodEntity])],
  exports:[TypeOrmModule, RiddlePeriodService],
  providers: [RiddlePeriodService]
})
export class RiddlePeriodModule {}
