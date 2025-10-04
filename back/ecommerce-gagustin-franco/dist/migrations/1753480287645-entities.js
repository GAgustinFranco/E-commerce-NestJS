"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entities1753480287645 = void 0;
class Entities1753480287645 {
    name = 'Entities1753480287645';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "files" ("id" SERIAL NOT NULL, "fileName" character varying NOT NULL, "mimeType" character varying NOT NULL, "url" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdmin" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "files" ADD CONSTRAINT "FK_a7435dbb7583938d5e7d1376041" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "files" DROP CONSTRAINT "FK_a7435dbb7583938d5e7d1376041"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdmin"`);
        await queryRunner.query(`DROP TABLE "files"`);
    }
}
exports.Entities1753480287645 = Entities1753480287645;
//# sourceMappingURL=1753480287645-entities.js.map