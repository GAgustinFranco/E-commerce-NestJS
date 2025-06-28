import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    
    
    constructor(private usersRepository: UsersRepository) {}

    getUsers() {
        return this.usersRepository.getUsers();
    }

    getUserById(id: number) {
        return this.usersRepository.getUserById(id);
    }

    createUser(user: any) {
        return this.usersRepository.createUser(user);
    }
    
    updateUser(id: number, updateUser: any) {
        return this.usersRepository.updateUser(id, updateUser);
    }

    deleteUser(id: number) {
        return this.usersRepository.deleteUser(id);
    }
}