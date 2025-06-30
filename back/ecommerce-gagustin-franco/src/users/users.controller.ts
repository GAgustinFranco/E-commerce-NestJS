import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { UsersService} from "./users.service"
import { User } from "./user.interface";

@Controller("users")
export class UsersController {
    constructor (private readonly usersService: UsersService) {}
        @Get()
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
        @HttpCode(HttpStatus.OK)
        getUserById(@Param("id") id: string){
            return this.usersService.getUserById(Number(id));
        }

        @Post()
        @HttpCode(HttpStatus.CREATED)
        createUser(@Body() user: User) {
            return this.usersService.createUser(user); 
        }

        @Put(":id")
        @HttpCode(HttpStatus.OK)
        updateUser(@Param("id") id: string, @Body() updateUser: User) {
            return this.usersService.updateUser(Number(id), updateUser);
        }

        @Delete(":id")
        @HttpCode(HttpStatus.OK)
        deleteUser(@Param("id") id: string) {
            return this.usersService.deleteUser(Number(id));
        }
}