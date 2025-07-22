import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Query, UseGuards, ParseUUIDPipe} from "@nestjs/common";
import { UsersService} from "./users.service"
import { AuthGuard } from "../auth/auth.guard";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";

@Controller("users")
export class UsersController {
    constructor (
        private readonly usersService: UsersService,
        private readonly cloudinaryService: CloudinaryService
    ){}
        @Get()
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        getUsers(
            @Query("page") page?: string,
            @Query("limit") limit?:string
        ) {
            return this.usersService.getUsers(
                Number(page) || 1,
                Number(limit) || 5
            );
        }

        @Get(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        getUserById(@Param("id", ParseUUIDPipe) id: string){
            return this.usersService.getUserById(id);
        }

        @Put(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        updateUser(@Param("id", ParseUUIDPipe) id: string, @Body() updateUser: UpdateUserDto) {
            return this.usersService.updateUser(id, updateUser);
        }

        @Delete(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        deleteUser(@Param("id", ParseUUIDPipe) id: string) {
            return this.usersService.deleteUser(id);
        }
}