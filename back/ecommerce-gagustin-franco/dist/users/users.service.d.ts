import { UsersRepository } from "./users.repository";
import { UpdateUserDto } from "./dto/UpdateUserDto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(page?: number, limit?: number): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders: import("../orders/entities/orders.entity").Order[];
        files: import("../files/entities/file.entity").File[];
    }[]>;
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
    updateUser(id: string, updateUser: UpdateUserDto): Promise<{
        id: string | undefined;
    }>;
    deleteUser(id: string): Promise<{
        id: string | undefined;
    }>;
}
