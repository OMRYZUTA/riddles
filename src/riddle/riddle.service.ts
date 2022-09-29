import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RiddleEntity} from "./models/riddle.entity";
import {Repository} from "typeorm";

@Injectable()
export class RiddleService {
    private dailyRiddle: RiddleEntity;
    constructor(
        @InjectRepository(RiddleEntity)
        private riddleRepository: Repository<RiddleEntity>,
    ) {}
    initDailyRiddle(){

    }
    getDailyRiddle(){
        return this.dailyRiddle
    }
    findAll(): Promise<RiddleEntity[]> {
        return this.riddleRepository.find();
    }
}
