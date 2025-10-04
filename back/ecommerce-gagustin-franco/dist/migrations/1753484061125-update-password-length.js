"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordLength1753484061125 = void 0;
class UpdatePasswordLength1753484061125 {
    name = 'UpdatePasswordLength1753484061125';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(100) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(20) NOT NULL`);
    }
}
exports.UpdatePasswordLength1753484061125 = UpdatePasswordLength1753484061125;
//# sourceMappingURL=1753484061125-update-password-length.js.map