import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdatePasswordLength1753484061125 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
