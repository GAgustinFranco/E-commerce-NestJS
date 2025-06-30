import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { User } from "./user.interface";

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}

    async getUsers(page = 1, limit = 5) {
        const users = await this.usersRepository.getUsers(page, limit);
        return users.map(({password, ...rest}) => rest);
    }

    async getUserById(id: number) {
        const user = await this.usersRepository.getUserById(id);
        if (!user) return null;
        const { password, ...rest} = user;
        return rest;
    }

    async createUser(user: User) {
        const newUser = await this.usersRepository.createUser(user);
        return {id: newUser.id};
    }
    
    async updateUser(id: number, updateUser: User) {
        const updated = await this.usersRepository.updateUser(id, updateUser);
        return {id: updated?.id};
    }

    async deleteUser(id: number) {
        const deleted = await this.usersRepository.deleteUser(id);
        return {id: deleted?.id};
    }
}