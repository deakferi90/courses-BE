import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { RegisterGuard } from './register.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UseGuards(RegisterGuard)
  register(@Body() body) {
    return this.authService.registerUser(body);
  }

  @Post('login')
  login() {
    return { register: 'success' };
  }
}
