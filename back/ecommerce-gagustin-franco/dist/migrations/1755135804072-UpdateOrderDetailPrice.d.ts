import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdateOrderDetailPrice1755135804072 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
