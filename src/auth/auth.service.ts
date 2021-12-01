import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  registerUser(user) {
    const {password, ...rest} = this.userService.registerUser(user);
    return {user: rest, token: 'this will contain also the token'};
  }

   //TO DO: refactor this beecause it is ugly like hell
   validateUserForRegistration(user) {
    if (!user) return false;
    if (!user.email) return false;
    if (!user.password) return false;
    const found = this.userService.findOne(user.email);
    if (found) return false;
    user.roles = ['user'];
    return true;
  }
}
