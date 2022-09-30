import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export abstract class Base{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'boolean', default: true, name: 'is_active' })
    isActive: boolean;

    @Column({ type: 'boolean', default: false, name: 'is_archived' })
    isArchived: boolean;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'create_date_time' })
    createDateTime: Date;

    @Column({ type: 'varchar', length: 300, default: 'Omry Zuta', name: 'created_by' })
    createdBy: string;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'last_changed_date_time' })
    lastChangedDateTime: Date;

    @Column({ type: 'varchar', length: 300, default: 'Omry Zuta', name: 'last_changed_by' })
    lastChangedBy: string;

    @Column({ type: 'varchar', length: 300, nullable: true, name: 'internal_comment' })
    internalComment: string | null;
}