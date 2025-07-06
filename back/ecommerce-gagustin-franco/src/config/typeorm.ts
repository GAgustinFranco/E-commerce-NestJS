import { DataSource, DataSourceOptions } from "typeorm";
import { registerAs } from "@nestjs/config";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

export default registerAs("typeorm", () => ({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
    logging: false,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.js,.ts}"]
    }));
    
export const connectionSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
    logging: false,
    entities: [__dirname + "/../**/*.entity.ts"], 
    migrations: [__dirname + "/../migrations/*{.ts,.js}"]
} as DataSourceOptions);