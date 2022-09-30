import { MigrationInterface, QueryRunner } from "typeorm";

export class createRiddlePeriod1664525969252 implements MigrationInterface {
    name = 'createRiddlePeriod1664525969252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "riddle_period" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true, "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300) NOT NULL DEFAULT 'Omry Zuta', "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedBy" character varying(300) NOT NULL DEFAULT 'Omry Zuta', "internalComment" character varying(300), "startDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "endDate" TIMESTAMP WITH TIME ZONE, "riddleId" uuid, CONSTRAINT "PK_79d06ae958da929022b2f206ab5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD CONSTRAINT "FK_1ec7c3ca6a72dfdfdfe26d84e3e" FOREIGN KEY ("riddleId") REFERENCES "riddle_period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP CONSTRAINT "FK_1ec7c3ca6a72dfdfdfe26d84e3e"`);
        await queryRunner.query(`DROP TABLE "riddle_period"`);
    }

}
