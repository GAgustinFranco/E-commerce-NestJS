import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ){}

        
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

    async getUsers(page: number, limit: number): Promise<User[]>{
        return this.repository.find({
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    async getUserById(id: string) {
        const user = await this.repository.findOne({
            where: {id},
            relations: ["orders"]
        });

        if (!user) throw new NotFoundException(`User with id ${id} not found`);
        const orders = user.orders?.map((order) => ({
            id: order.id,
            date: order.date
        }));

        const { password, ...rest } = user;
        return {...rest, orders};
    }

    async createUser(user:User): Promise<User> {
        const newUser = this.repository.create(user);
        return await this.repository.save(newUser)
    }

    async updateUser(id: string, updatedUser: Partial<User>): Promise<User | null > {
        const user =  await this.repository.preload({
            id,
            ...updatedUser
        });

        if (!user) return null;
        
        return await this.repository.save(user);
    }

    async deleteUser(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) return null;
    
        const deleted = this.users.splice(index, 1);
        return deleted[0];
    }
}