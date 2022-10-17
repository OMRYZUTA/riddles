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
import {ConfigModule} from "@nestjs/config";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      migrationsTableName: 'migrations',
      migrationsRun: true,
      logging: false,
      entities: [RiddleEntity,RiddlePeriodEntity],
      autoLoadEntities: true,

    }),
    EventEmitterModule.forRoot(),
      RiddleModule,RiddlePeriodModule, DailyRiddleModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
