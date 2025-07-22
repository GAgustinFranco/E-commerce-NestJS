import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { CreateUserDto } from "./dto/CreateUserDto";
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
      private readonly usersRepository: UsersRepository,
      private readonly jwtService: JwtService
    ){}

    async signUp(CreateUserDto: CreateUserDto) {
        const { password, confirmPassword } = CreateUserDto;

        if(password !== confirmPassword) {
          throw new BadRequestException("Passwords do not match");
        }

        const user = await this.usersRepository.getUserByEmail(CreateUserDto.email);
        if(user){
          throw new BadRequestException("User already exists with this email address");
        }

        const hashedPassword = await bcrypt.hash(CreateUserDto.password, 10)
        if(!hashedPassword){
          throw new BadRequestException("Error hashing password");
        }
        const newUser = await this.usersRepository.createUser({...CreateUserDto, password: hashedPassword});
        
        const {password: _, ...userWithoutPassword} = newUser;
        return userWithoutPassword;
    }

    async signIn(email: string, password: string) {

        const user = await this.usersRepository.getUserByEmail(email);
        if(!user){
          throw new BadRequestException("Email or password incorrect");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
          throw new BadRequestException("Email or password incorrect");
        }

        const userPayload = {
          sub: user.id,
          id: user.id,
          email: user.email
        }

        const token = this.jwtService.sign(userPayload)

        return {success: "Login successful", token};
    }
}
