import { UsersRepository } from '../users/users.repository';
import { CreateUserDto } from "./dto/CreateUserDto";
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepository;
    private readonly jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    signUp(CreateUserDto: CreateUserDto): Promise<{
        id: string;
    }>;
    signIn(email: string, password: string): Promise<{
        success: string;
        token: string;
    }>;
}
