import { Controller, Post, Body, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

      @Post("signin")
      @HttpCode(HttpStatus.OK)
      async singIn(@Body("email") email:string, @Body("password") password:string){
      
      if(!email || !password) {
        throw new HttpException("Email or password incorrect", HttpStatus.UNAUTHORIZED)
      }

      const user = await this.authService.singIn(email, password);

      if (!user) {
          throw new HttpException("Email or password incorrect", HttpStatus.UNAUTHORIZED )
      }

      return {message: "Login successful", user};
    }
}
