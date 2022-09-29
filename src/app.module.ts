import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {RiddleModule} from "./riddle/riddle.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import {RiddleEntity} from "./riddle/models/riddle.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'riddle',
      password: 'riddle',
      database: 'riddle',
      entities: [RiddleEntity],
      synchronize: false,
      autoLoadEntities: true,
    }),
      RiddleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
