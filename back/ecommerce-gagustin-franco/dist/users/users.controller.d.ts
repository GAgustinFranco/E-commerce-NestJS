import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { User } from "./entities/users.entity";
export declare class UsersController {
    private readonly usersService;
    private readonly cloudinaryService;
    constructor(usersService: UsersService, cloudinaryService: CloudinaryService);
    getUsers(page?: string, limit?: string): Promise<User[]>;
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
