import { Controller, Post, Body, HttpException, HttpStatus, HttpCode, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/LoginUserDto';
import { CreateUserDto } from './dto/CreateUserDto';
import { DateAdderInterceptor } from 'src/interceptors/date-adder-interceptor/date-adder-interceptor.interceptor';


@Controller("auth") 
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signup")
    @UseInterceptors(DateAdderInterceptor)
    @HttpCode(HttpStatus.CREATED)
    async signUp(@Body() CreateUserDto: CreateUserDto) {
        return this.authService.signUp(CreateUserDto); 
    }

    @Post("signin")
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() LoginUserDto:LoginUserDto){
        return this.authService.signIn(LoginUserDto.email, LoginUserDto.password);
    }
}
