import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegisterGuard } from './register.guard';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [AuthService, RegisterGuard],
  controllers: [AuthController]
})
export class AuthModule {}

// deci avem urmatorii pasi...

//1. setam controllerul de login si de register
//2. aceste controllere au cate un guard
//3. aceste guarduri au cate o strategie care trebuie implementata din passport
//4. fiecare strategie din asta extinde clasa de PassportStrategy si care implementeaza 
// o metoda de validate....parametrii care vin acolo vin probabil din request si tot ceea ce returnam 
// aici ajunge pe request si in controllerul de la login sau register

// ce ar trebui sa contruim prima data?
