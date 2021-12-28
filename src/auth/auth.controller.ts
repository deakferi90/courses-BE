import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtPresentGuard } from './jwt-present.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { RegisterGuard } from './register.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UseGuards(RegisterGuard)
  register(@Body() user) {
    return this.authService.validateUserForRegistration(user);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Req() req) {
    return this.authService.login(req.user);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard, JwtPresentGuard)
  logOut(@Req() req) {
    return this.authService.logout(req);
  }

  @Post('logout/all')
  @UseGuards(JwtAuthGuard, JwtPresentGuard)
  logOutAllDevices(@Req() req) {
    return this.authService.logoutAllDevices(req.user);
  }

  
  @Get('testcats')
  @UseGuards(JwtAuthGuard, JwtPresentGuard)
  getTestCats() {
    return {cats:'this are the cats that we work with'};
  }
  
  @Get('testdogs')
  getTestDogs() {
    return {dogs:'these are the dogs'};
  }

  @Get('mice')
  getTestMice() {
    return {mice:'these are the mice'};
  }
}

// la logout stergem acest array de tokens - asta inseamna ca ne delogam de pe toate deviceurile
// dar o sa implementez si delogare de pe un device...asta ar insemna sa stergem doar tokenul respectiv
