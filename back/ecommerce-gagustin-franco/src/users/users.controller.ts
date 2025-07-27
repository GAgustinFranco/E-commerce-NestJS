import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Query, UseGuards, ParseUUIDPipe} from "@nestjs/common";
import { UsersService} from "./users.service"
import { AuthGuard } from "../auth/auth.guard";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { RolesGuard } from "../guards/roles.guard";
import { Roles } from "../decorators/roles.decorators";
import { Role } from "../auth/role.enum";
import { plainToInstance } from "class-transformer";
import {User} from "./entities/users.entity";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("users")
export class UsersController {
    constructor (
        private readonly usersService: UsersService,
        private readonly cloudinaryService: CloudinaryService
    ){}
        @ApiBearerAuth()
        @Get()
        @UseGuards(AuthGuard, RolesGuard)
        @Roles(Role.Admin)
        @HttpCode(HttpStatus.OK)
        async getUsers(
            @Query("page") page?: string,
            @Query("limit") limit?:string
        ) {
            const users = await this.usersService.getUsers(
                Number(page) || 1,
                Number(limit) || 5
            );
            return plainToInstance(User, users, {excludeExtraneousValues: true})
        }

        @ApiBearerAuth()
        @Get(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        async getUserById(@Param("id", ParseUUIDPipe) id: string){
            return await this.usersService.getUserById(id);
        }

        @ApiBearerAuth()
        @Put(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        async updateUser(@Param("id", ParseUUIDPipe) id: string, @Body() updateUser: UpdateUserDto) {
            return await this.usersService.updateUser(id, updateUser);
        }

        @ApiBearerAuth()
        @Delete(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        async deleteUser(@Param("id", ParseUUIDPipe) id: string) {
            return await this.usersService.deleteUser(id);
        }
}