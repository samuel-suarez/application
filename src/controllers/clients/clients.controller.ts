import { Controller, Param, Query, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('clients')
export class ClientsController {
    constructor(private appService: AppService) {}
    
    @Get('/')
    sayHi(): any {
      return this.appService.getClients();
    }
  
    @Get('/search')
    params(@Query() params: any) {
     const {ci} = params;
     return `Este es el numero de cedula solicitado ${ci}`
   }
  
    @Get('/:id')
     hola(@Param() {id}) {
      return `Hola identificador numero ${id}`
    }
}
