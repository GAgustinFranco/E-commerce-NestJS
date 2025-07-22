import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import { CreateUserDto } from "../auth/dto/CreateUserDto";

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async getUsers(page = 1, limit = 5) {
        const users = await this.usersRepository.getUsers(page, limit);
        return users.map(({password, ...rest}) => rest);
    }

    async getUserById(id: string) {
        return this.usersRepository.getUserById(id);
    }

    // async createUser(user: CreateUserDto) {
    //     const newUser = await this.usersRepository.createUser(user);
    //     return {id: newUser.id};
    // }
    
    async updateUser(id: string, updateUser: UpdateUserDto) {
        const updated = await this.usersRepository.updateUser(id, updateUser);
        return {id: updated?.id};
    }

    async deleteUser(id: string) {
        const deleted = await this.usersRepository.deleteUser(id);
        return {id: deleted?.id};
    }
}