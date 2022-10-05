import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {RiddleModule} from "./riddle/riddle.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import {RiddleEntity} from "./db/entity/riddle.entity";
import { RiddlePeriodModule } from './riddle-period/riddle-period.module';
import {RiddlePeriodEntity} from "./db/entity/riddle-period.entity";
import { DailyRiddleModule } from './daily-riddle/daily-riddle.module';
import {EventEmitterModule} from "@nestjs/event-emitter";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'riddle',
      password: 'riddle',
      database: 'riddle',
      entities: [RiddleEntity,RiddlePeriodEntity],
      synchronize: false,
      autoLoadEntities: true,
    }),
    EventEmitterModule.forRoot(),
      RiddleModule,RiddlePeriodModule, DailyRiddleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
