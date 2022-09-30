import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";
import {Repository} from "typeorm";

@Injectable()
export class RiddlePeriodService {
    constructor(
        @InjectRepository(RiddlePeriodEntity)
        private riddlePeriodRepository: Repository<RiddlePeriodEntity>,
    ) {
    }

    async fetchActiveRiddle() {
        let periods =  await this.riddlePeriodRepository.findBy({isActive:true})
        return periods[0]
    }
}
