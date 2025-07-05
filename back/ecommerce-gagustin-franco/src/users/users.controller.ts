import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Query, UseGuards } from "@nestjs/common";
import { UsersService} from "./users.service"
import { AuthGuard } from "src/auth/auth.guard";
import { User } from "./entities/users.entity";

@Controller("users")
export class UsersController {
    constructor (private readonly usersService: UsersService) {}
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
        getUserById(@Param("id") id: string){
            return this.usersService.getUserById(id);
        }

        @Post()
        @HttpCode(HttpStatus.CREATED)
        createUser(@Body() user: User) {
            return this.usersService.createUser(user); 
        }

        @Put(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        updateUser(@Param("id") id: string, @Body() updateUser: User) {
            return this.usersService.updateUser(id, updateUser);
        }

        @Delete(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        deleteUser(@Param("id") id: string) {
            return this.usersService.deleteUser(Number(id));
        }
}