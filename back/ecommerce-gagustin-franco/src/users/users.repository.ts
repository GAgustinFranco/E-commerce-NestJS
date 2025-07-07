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

    async deleteUser(id: string): Promise<User | null> {
        const user = await this.repository.findOneBy({ id });
        if (!user) return null;
    
        await this.repository.remove(user);
        return user;
    }
}