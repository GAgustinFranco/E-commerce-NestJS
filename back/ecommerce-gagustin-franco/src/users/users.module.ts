import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/users.entity";
import { File } from "../files/entities/file.entity";
import { CloudinaryConfig } from "../config/cloudinary";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { AuthService } from "../auth/auth.service";

@Module({
    imports: [TypeOrmModule.forFeature([User, File])],
    controllers: [UsersController],
    providers: [
        UsersService,
        UsersRepository,
        CloudinaryConfig,
        CloudinaryService,
        AuthService
    ],
    exports: [UsersRepository]
})
export class UsersModule  {
    
}