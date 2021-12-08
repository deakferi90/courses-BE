import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtPresentGuard } from 'src/auth/jwt-present.guard';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private coursesService: CoursesService) {}

    @Get()
    @UseGuards(JwtAuthGuard, JwtPresentGuard)
    getCourses() {
        return this.coursesService.getCourses();
    }
}
