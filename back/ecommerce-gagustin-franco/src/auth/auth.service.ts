import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { LoginUserDto } from './dto/LoginUserDto';

@Injectable()
export class AuthService {
    constructor(private usersRepository: UsersRepository){}

    async signIn(loginUserDto: LoginUserDto) {

      const {email, password} = loginUserDto;

      const allUsers = await this.usersRepository.getUsers(1, 1000);

      const user = allUsers.find(user => user.email === email);

      if (!user || user.password !== password){
        return null;
      }

      const { password: _, ...rest} = user;
      return rest;
    }
}
