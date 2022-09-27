import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('app service is born')
  }

  @Get()
  getHello(): string {
    console.log('getting hello')
    return this.appService.getHello();
  }
}
