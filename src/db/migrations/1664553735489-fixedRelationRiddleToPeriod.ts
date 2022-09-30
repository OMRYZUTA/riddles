import { MigrationInterface, QueryRunner } from "typeorm";

export class fixedRelationRiddleToPeriod1664553735489 implements MigrationInterface {
    name = 'fixedRelationRiddleToPeriod1664553735489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP CONSTRAINT "FK_1ec7c3ca6a72dfdfdfe26d84e3e"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD CONSTRAINT "FK_1ec7c3ca6a72dfdfdfe26d84e3e" FOREIGN KEY ("riddleId") REFERENCES "riddle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "riddle_period" DROP CONSTRAINT "FK_1ec7c3ca6a72dfdfdfe26d84e3e"`);
        await queryRunner.query(`ALTER TABLE "riddle_period" ADD CONSTRAINT "FK_1ec7c3ca6a72dfdfdfe26d84e3e" FOREIGN KEY ("riddleId") REFERENCES "riddle_period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
