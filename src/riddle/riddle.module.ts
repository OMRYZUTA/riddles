import { Module } from '@nestjs/common';
import { RiddleService } from './riddle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {RiddleEntity} from "../db/entity/riddle.entity";

@Module({
  imports:[TypeOrmModule.forFeature([RiddleEntity])],
  exports:[RiddleService],
  providers: [RiddleService]
})
export class RiddleModule {}
