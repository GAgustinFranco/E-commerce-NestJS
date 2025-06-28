import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
        
    private users = [
        {
            id: 1,
            email: "string",
            name: "Jorge",
            password: "string",
            address: "string",
            phone: "string",
            country: "string",
            city: "string"
        },
        {
            id: 2,
            email: "string",
            name: "Osvaldo",
            password: "string",
            address: "string",
            phone: "string",
            country: "string",
            city: "string"
        },
        {
            id: 3,
            email: "string",
            name: "Celene",
            password: "string",
            address: "string",
            phone: "string",
            country: "string",
            city: "string"
        }
    ];

    async getUsers(){
        return this.users;
    }

    async getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }

    async createUser(user:any) {
        const newUser = {
            id: this.users.length + 1,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }

    async updateUser(id: number, updatedUser: any) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) return null;
    
        this.users[index] = { ...this.users[index], ...updatedUser };
        return this.users[index];
    }

    async deleteUser(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) return null;
    
        const deleted = this.users.splice(index, 1);
        return deleted[0];
    }
}