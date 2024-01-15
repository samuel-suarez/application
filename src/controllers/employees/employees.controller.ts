import { Controller, Get, Param } from '@nestjs/common';

@Controller('employees')
export class EmployeesController {
    constructor() {}

    @Get('')
    getEmployees() {
        return {
            employee_id: 1,
            name: 'Samuel Alfonzo',
            lastname: 'Suarez Rivero',
            hire_date: new Date().toISOString(),
        }
    }

}
