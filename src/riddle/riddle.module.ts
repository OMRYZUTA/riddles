import { Module } from '@nestjs/common';
import { RiddleController } from './riddle.controller';
import { RiddleService } from './riddle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {RiddleEntity} from "./models/riddle.entity";

@Module({
  imports:[TypeOrmModule.forFeature([RiddleEntity])],
  controllers: [RiddleController],
  providers: [RiddleService]
})
export class RiddleModule {}
