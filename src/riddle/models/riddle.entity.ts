import {Column, Entity} from "typeorm";
import {Base} from "../../model/base.entity";

@Entity()
export class RiddleEntity extends  Base{

    @Column()
    question: string;

    @Column()
    answer: string;
}
