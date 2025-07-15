import { Controller, Post, Body, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/LoginUserDto';

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

      @Post("signin")
      @HttpCode(HttpStatus.OK)
      async signIn(@Body() LoginUserDto:LoginUserDto){

      const { email, password } = LoginUserDto;
      
      if(!email || !password) {
        throw new HttpException("Email or password incorrect", HttpStatus.UNAUTHORIZED)
      }

      const user = await this.authService.signIn(LoginUserDto);

      if (!user) {
          throw new HttpException("Email or password incorrect", HttpStatus.UNAUTHORIZED )
      }

      return {message: "Login successful", user};
    }
}
