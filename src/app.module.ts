import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {RiddleModule} from "./riddle/riddle.module";

@Module({
  imports: [RiddleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
