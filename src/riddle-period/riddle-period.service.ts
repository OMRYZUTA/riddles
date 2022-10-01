import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";
import {Repository} from "typeorm";



@Injectable()
export class RiddlePeriodService {
    private activePeriod: RiddlePeriodEntity| null;

    constructor(
        @InjectRepository(RiddlePeriodEntity)
        private riddlePeriodRepository: Repository<RiddlePeriodEntity>,
    ) {
    }

    async fetchActiveRiddle() {
        if (this.activePeriod == undefined) {
            this.activePeriod = await this.riddlePeriodRepository.findOne({where:{isActive: true}})
        }
        return this.activePeriod
    }


    startNewPeriod(riddleId: string) {
        let riddlePeriod = new RiddlePeriodEntity()
        riddlePeriod.riddleId = riddleId
        riddlePeriod.isActive = true
        riddlePeriod.startDate = new Date(Date.now())
        return this.riddlePeriodRepository.save(riddlePeriod);
    }

    async endPeriod(riddlePeriodId: string) {
        let riddlePeriod = await this.riddlePeriodRepository.findOne({
            where: {
                id: riddlePeriodId,
            }
        })
        if (riddlePeriod == undefined) {
            console.log(`Error riddle period id :${riddlePeriodId} not exist`)
            throw new Error('error')
        }
        riddlePeriod.isActive = false
        await this.riddlePeriodRepository.save(riddlePeriod)
    }

    async isValidPeriod(periodId: string) {
        let period = await this.riddlePeriodRepository.findOne({where:{id: periodId}})
        if( period == undefined){
            throw new Error(`Period with id: ${periodId} does not exists`)
        }
        let diff = Math.abs(new Date(Date.now()).getTime() - period.startDate.getTime())
        let diffDays = diff / (1000 * 3600 * 24)
        return diffDays < 1
    }
}
