import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LocaljwtModule } from './localjwt/localjwt.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [UsersModule, AuthModule, LocaljwtModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
