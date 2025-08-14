import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOrderDetailPrice1755135804072 implements MigrationInterface {
    name = 'UpdateOrderDetailPrice1755135804072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_details" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD "price" numeric(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_details" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD "price" integer NOT NULL`);
    }

}
