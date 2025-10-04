import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddFilesTable1753639039819 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
