import { Injectable } from '@nestjs/common';
import { LocaljwtService } from 'src/localjwt/localjwt.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private localjwtService: LocaljwtService,
  ) {}

  async login(user) {
    const payload = { user: user.username, email: user.email };
    const access_token = this.localjwtService.sign(payload);
    this.userService.addTokenToUsername(user.username, access_token);
    return {
      access_token,
      user
    };
  }

  async logout(request) {
    const user = request.user;
    const token = request.headers.authorization.replace("Bearer ", "");
    await this.userService.removeTokenForUsername(user.username, token);
    return {success: true};
  }

  async logoutAllDevices (user) {
    await this.userService.removeAllTokensForName(user.username);
    return {success: true};
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByUserName(username);
    if (user && user.password === pass) {
      const { password, tokens,...rest } = user;
      return rest;
    }
    return null;
  }

  registerUser(user) {
    const { password, ...rest } = this.userService.registerUser(user);
    return { user: rest, token: 'this will contain also the token' };
  }

  //TO DO: refactor this beecause it is ugly like hell
  validateUserForRegistration(user) {
    if (!user) return false;
    if (!user.name) return false;
    if (!user.email) return false;
    if (!user.username) return false;
    if (!user.password) return false;
    const found = this.userService.findOne(user.email);
    this.registerUser(user);
    if (found) return false;
    user.roles = ['user'];
    user.tokens = [];
    return true;
  }

  async validateTokenToUsername(token, user) {
    const foundUser = await this.userService.findOneByUserName(user.username);
    const foundToken = await foundUser.tokens.find(userToken => userToken === token);
    if(!foundToken) return false;
    return true;
  }
}
