import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
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
  @UseGuards(LocalAuthGuard)
  login(@Req() req) {
    return this.authService.login(req.user);
  }

  //this should be removed on productions
  @Get('testcats')
  @UseGuards(JwtAuthGuard)
  getTestCats() {
    return {cats:'this are the cats that we work with'};
  }
}
