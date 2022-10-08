import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RiddleEntity} from "../db/entity/riddle.entity";
import {Repository} from "typeorm";

@Injectable()
export class RiddleService {
    private dailyRiddle: RiddleEntity;
    constructor(
        @InjectRepository(RiddleEntity)
        private riddleRepository: Repository<RiddleEntity>,
    ) {}
    getDailyRiddle(){
        return this.dailyRiddle
    }

    findOne(id:string){
        return this.riddleRepository.findOne({
            where: {id}
        })
    }

    getNewRiddle() {
        return this.riddleRepository.findOne({
            where: {isActive:true}
        })
    }

    async disableRiddle(riddleId: string) {
        let riddle = await this.riddleRepository.findOne( { where: {
                id: riddleId,
            }})
        if(riddle == undefined){
            console.log(`Error riddle period id :${riddleId} not exist`)
            throw new Error('error')
        }
        riddle.isActive = false
        await this.riddleRepository.save(riddle)
    }
}
