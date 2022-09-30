import {Column, Entity, OneToMany} from "typeorm";
import {Base} from "./base.entity";
import {RiddlePeriodEntity} from "./riddle-period.entity";


@Entity('riddle')
export class RiddleEntity extends  Base{

    @Column()
    question: string;

    @Column()
    answer: string;

    @OneToMany(() => RiddlePeriodEntity, (riddlePeriod) => riddlePeriod.riddle)
    periods: RiddleEntity[]
}
