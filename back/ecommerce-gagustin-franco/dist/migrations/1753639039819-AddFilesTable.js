"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFilesTable1753639039819 = void 0;
class AddFilesTable1753639039819 {
    name = 'AddFilesTable1753639039819';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "files" ("id" SERIAL NOT NULL, "fileName" character varying NOT NULL, "mimeType" character varying NOT NULL, "url" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "files" ADD CONSTRAINT "FK_a7435dbb7583938d5e7d1376041" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "files" DROP CONSTRAINT "FK_a7435dbb7583938d5e7d1376041"`);
        await queryRunner.query(`DROP TABLE "files"`);
    }
}
exports.AddFilesTable1753639039819 = AddFilesTable1753639039819;
//# sourceMappingURL=1753639039819-AddFilesTable.js.map