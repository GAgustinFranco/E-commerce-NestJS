import { User } from "./entities/users.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../auth/dto/CreateUserDto";
import { UpdateUserDto } from "./dto/UpdateUserDto";
export declare class UsersRepository {
    private readonly repository;
    constructor(repository: Repository<User>);
    getUsers(page: number, limit: number): Promise<User[]>;
    getUserById(id: string): Promise<{
        orders: {
            id: string;
            date: Date;
        }[];
        id: string;
        name: string;
        email: string;
        phone: string;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        files: import("../files/entities/file.entity").File[];
    }>;
    createUser(CreateUserDto: CreateUserDto): Promise<User>;
    updateUser(id: string, updatedUser: Partial<UpdateUserDto>): Promise<User | null>;
    deleteUser(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
}
