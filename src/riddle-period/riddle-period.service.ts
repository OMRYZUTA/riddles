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

    async endPeriods(riddleId: string |undefined) {
        let riddlePeriods = await this.riddlePeriodRepository.find({
            where: {
                riddleId: riddleId,
            }
        })
        if (riddlePeriods.length === 0) {
            console.log(`Error there are no periods for riddle id:${riddleId}`)
            throw new Error('error')
        }
        riddlePeriods.forEach(period =>{
            period.isActive = false
            this.riddlePeriodRepository.save(period)
        })
    }

    async isValidPeriod(period: RiddlePeriodEntity) {
        let diff = Math.abs(new Date(Date.now()).getTime() - period.startDate.getTime())
        let diffDays = diff / (1000 * 3600 * 24)
        return diffDays < 1
    }
}
