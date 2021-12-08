import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CoursesService {
    private courses = [
        {id: uuidv4(), name: 'Learn Javascript in a few steps', description: 'You will learn Javascript in a few steps' },
        {id: uuidv4(), name: 'Intro to HTML & CSSS', description: 'You will learn Javascript in a few steps' },
        {id: uuidv4(), name: 'Intro to React', description: 'You will learn Javascript in a few steps' },
        {id: uuidv4(), name: 'React and redux app development', description: 'You will learn Javascript in a few steps' },
        {id: uuidv4(), name: 'jQuery Playground', description: 'You will learn Javascript in a few steps' },
    ];

    public getCourses = () => {
        return this.courses;
    }

    public addCourse = (course) => {
        course.id = uuidv4();
        this.courses.push(course);
    }

    public getCourseById = (id) => {
        return this.courses.find(course => course.id === id);
    }
}
