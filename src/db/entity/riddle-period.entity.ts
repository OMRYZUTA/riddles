import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Base} from "./base.entity";
import {RiddleEntity} from "./riddle.entity";

@Entity('riddle_period')
export class RiddlePeriodEntity extends  Base{
    @Column({ name: 'riddle_id' })
    riddleId: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'start_date' })
    startDate: Date;

    @Column({ type: 'timestamptz', nullable: true,name: 'end_date'})
    endDate: Date;

    @ManyToOne(() => RiddleEntity, (riddle) => riddle.periods)
    @JoinColumn({ name: 'riddle_id' })
    riddle: RiddleEntity
}
