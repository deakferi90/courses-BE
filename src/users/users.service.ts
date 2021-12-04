import { Injectable, BadRequestException } from '@nestjs/common';
import { ignoreElements } from 'rxjs';

export type User = any;

@Injectable()
export class UsersService {
  private users: User[] = [
    { name: 'Matei Alexandru', username: 'alex_pop_admin', email: 'alexpop4u@gmail.com', password: 'test123', roles: ['admin'], tokens: [] },
    { name: 'Matei Alexandru', username: 'deak_ferenc_admin', email: 'deak_ferenc@gmail.com', password: 'test123', roles: ['admin'], tokens:[] },
    { name: 'Matei Alexandru', username: 'deak_ferenc', email: 'deak_ferencq@gmail.com', password: 'test123', roles: ['user'], tokens: [] },
    { name: 'Matei Alexandru', username: 'alex_pop', email: 'alexpop3u@gmail.com', password: 'test123', roles: ['user'], tokens: [] },
  ];

  async findOneByUserName(username) {
    return this.users.find((user) => user.username === username);
  }

  async removeTokenForUsername(username, token) {
    this.users.forEach(user => {
      if(user.username===username) {
        user.tokens=user.tokens.filter(userToken => userToken !== token);
      }
    })
  }

  async removeAllTokensForName(username) {
    this.users.forEach(user => {
      if(user.username===username) {
        user.tokens=[];
      }
    })
  }
  
  async addTokenToUsername(username, token) {
    this.users.forEach(user => {
      if(user.username===username) {
        user.tokens.push(token);
      }
    })
  }

  findOne(email: string): User {
    return this.users.find((user) => user.email === email);
  }

  registerUser(user) {
    this.users.push(user);
    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }

}
