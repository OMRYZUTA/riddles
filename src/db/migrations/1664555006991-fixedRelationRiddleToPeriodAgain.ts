import { MigrationInterface, QueryRunner } from "typeorm";

export class fixedRelationRiddleToPeriodAgain1664555006991 implements MigrationInterface {
    name = 'fixedRelationRiddleToPeriodAgain1664555006991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP CONSTRAINT "FK_1ec7c3ca6a72dfdfdfe26d84e3e"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" RENAME COLUMN "riddleId" TO "riddle_id"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ALTER COLUMN "riddle_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD CONSTRAINT "FK_5592e4521761a626a2a9dc79196" FOREIGN KEY ("riddle_id") REFERENCES "riddle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP CONSTRAINT "FK_5592e4521761a626a2a9dc79196"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ALTER COLUMN "riddle_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "riddle_period" RENAME COLUMN "riddle_id" TO "riddleId"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD CONSTRAINT "FK_1ec7c3ca6a72dfdfdfe26d84e3e" FOREIGN KEY ("riddleId") REFERENCES "riddle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
