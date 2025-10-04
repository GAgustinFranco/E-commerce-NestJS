"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderDetailPrice1755135804072 = void 0;
class UpdateOrderDetailPrice1755135804072 {
    name = 'UpdateOrderDetailPrice1755135804072';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_details" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD "price" numeric(10,2) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_details" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD "price" integer NOT NULL`);
    }
}
exports.UpdateOrderDetailPrice1755135804072 = UpdateOrderDetailPrice1755135804072;
//# sourceMappingURL=1755135804072-UpdateOrderDetailPrice.js.map