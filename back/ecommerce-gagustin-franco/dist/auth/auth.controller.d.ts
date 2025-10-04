import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/LoginUserDto';
import { CreateUserDto } from './dto/CreateUserDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(CreateUserDto: CreateUserDto): Promise<{
        id: string;
    }>;
    signIn(LoginUserDto: LoginUserDto): Promise<{
        success: string;
        token: string;
    }>;
}
