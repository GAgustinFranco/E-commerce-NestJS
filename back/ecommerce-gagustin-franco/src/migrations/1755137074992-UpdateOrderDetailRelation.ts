import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOrderDetailRelation1755137074992 implements MigrationInterface {
    name = 'UpdateOrderDetailRelation1755137074992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_9c16681cbfc2d83eb6b2b9843e9"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "REL_9c16681cbfc2d83eb6b2b9843e"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "detailId"`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD "orderId" uuid`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_147bc15de4304f89a93c7eee969" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_147bc15de4304f89a93c7eee969"`);
        await queryRunner.query(`ALTER TABLE "order_details" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "detailId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "REL_9c16681cbfc2d83eb6b2b9843e" UNIQUE ("detailId")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_9c16681cbfc2d83eb6b2b9843e9" FOREIGN KEY ("detailId") REFERENCES "order_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
