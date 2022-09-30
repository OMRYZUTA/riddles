import { MigrationInterface, QueryRunner } from "typeorm";

export class alterToSnakeCase1664549298728 implements MigrationInterface {
    name = 'alterToSnakeCase1664549298728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "isArchived"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "createDateTime"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "lastChangedDateTime"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "lastChangedBy"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "internalComment"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "isArchived"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "createDateTime"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "lastChangedDateTime"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "lastChangedBy"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "internalComment"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "startDate"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "endDate"`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "is_active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "is_archived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "create_date_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "created_by" character varying(300) NOT NULL DEFAULT 'Omry Zuta'`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "last_changed_date_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "last_changed_by" character varying(300) NOT NULL DEFAULT 'Omry Zuta'`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "internal_comment" character varying(300)`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "is_active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "is_archived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "create_date_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "created_by" character varying(300) NOT NULL DEFAULT 'Omry Zuta'`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "last_changed_date_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "last_changed_by" character varying(300) NOT NULL DEFAULT 'Omry Zuta'`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "internal_comment" character varying(300)`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "start_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "end_date" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "end_date"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "start_date"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "internal_comment"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "last_changed_by"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "last_changed_date_time"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "created_by"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "create_date_time"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "is_archived"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "internal_comment"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "last_changed_by"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "last_changed_date_time"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "created_by"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "create_date_time"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "is_archived"`);
        await queryRunner.query(`ALTER TABLE "riddle" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "endDate" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "startDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "internalComment" character varying(300)`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "lastChangedBy" character varying(300) NOT NULL DEFAULT 'Omry Zuta'`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "createdBy" character varying(300) NOT NULL DEFAULT 'Omry Zuta'`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "isArchived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "internalComment" character varying(300)`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "lastChangedBy" character varying(300) NOT NULL DEFAULT 'Omry Zuta'`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "createdBy" character varying(300) NOT NULL DEFAULT 'Omry Zuta'`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "isArchived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "riddle" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

}
