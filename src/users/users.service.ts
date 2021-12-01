import { Injectable, BadRequestException } from '@nestjs/common';
import { ignoreElements } from 'rxjs';

export type User = any;

@Injectable()
export class UsersService {
  private users: User[] = [
    { email: 'alexpop4u@gmail.com', password: 'test123', roles: ['admin'] },
    { email: 'deak_ferenc@gmail.com', password: 'test123', roles: ['admin'] },
    { email: 'deak_ferencq@gmail.com', password: 'test123', roles: ['user'] },
    { email: 'alexpop3u@gmail.com', password: 'test123', roles: ['user'] },
  ];

  findOne(email: string): User {
    return this.users.find((user) => user.email === email);
  }

  registerUser(user) {
    this.users.push(user);
    return { succes: true };
  }

  getAllUsers(): User[] {
    return this.users;
  }

}
