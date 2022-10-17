import {Controller, Get, HttpStatus} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {


    @Get()
    index() {
        return 'home page'
    }

    @Get('health')
    healthcheck() {
        return HttpStatus.OK
    }
}
