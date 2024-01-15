import { Injectable } from '@nestjs/common';

import {Client} from './common/interfaces/IClient'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getClients():Client {
    return {
      name: 'Julio Perez',
      ci: '30572480',
      birthdate: new Date(),
    }
  }
}
