import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './controllers/clients/clients.controller';
import { EmployeesController } from './controllers/employees/employees.controller';

@Module({
  imports: [],
  controllers: [AppController, ClientsController, EmployeesController],
  providers: [AppService],
})
export class AppModule {}
