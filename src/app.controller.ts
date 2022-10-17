import {Controller, Get, HttpStatus} from '@nestjs/common';
@Controller()
export class AppController {

    @Get('health')
    healthcheck() {
        return HttpStatus.OK
    }
}
