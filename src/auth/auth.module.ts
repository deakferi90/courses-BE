import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegisterGuard } from './register.guard';
import { UsersModule } from 'src/users/users.module';
import { LocalAuthStrategy } from './local-auth.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { LocaljwtModule } from 'src/localjwt/localjwt.module';
import { JwtStrategy } from './jwt-auth.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtPresentGuard } from './jwt-present.guard';

@Module({
  imports: [UsersModule, LocaljwtModule],
  providers: [
    AuthService,
    RegisterGuard,
    LocalAuthStrategy,
    LocalAuthGuard,
    JwtStrategy,
    JwtAuthGuard,
    JwtPresentGuard,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
