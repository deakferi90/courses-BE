import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Post()
    registerUser(@Body() body) {
        console.log('Ajunge initial aici:');
        console.log('Asta avem pe body!!');
        console.log(body);
        this.usersService.registerUser(body);
        return body;
    }
}
