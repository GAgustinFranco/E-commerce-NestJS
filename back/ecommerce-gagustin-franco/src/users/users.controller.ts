import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { UsersService} from "./users.service"

@Controller("users")
export class UsersController {
    constructor (private readonly usersService: UsersService) {}
        @Get()
        getUsers() {
            return this.usersService.getUsers();
        }

        @Get(":id")
        getUserById(@Param("id") id: string){
            return this.usersService.getUserById(Number(id));
        }

        @Post()
        createUser(@Body() user: any) {
            return this.usersService.createUser(user); 
        }

        @Put(":id")
        updateUser(@Param("id") id: string, @Body() updateUser: any) {
            return this.usersService.updateUser(Number(id), updateUser);
        }

        @Delete(":id")
        deleteUser(@Param("id") id: string) {
            return this.usersService.deleteUser(Number(id));
        }
}