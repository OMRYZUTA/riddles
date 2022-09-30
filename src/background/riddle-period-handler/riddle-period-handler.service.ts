import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
const schedule = require('node-schedule');

@Injectable()
export class RiddlePeriodHandlerService implements OnApplicationBootstrap {
    onApplicationBootstrap(){
        schedule.scheduleJob('0 0 * * *', ()=> {
            console.log('Replace Daily riddle');
        });
    }
}
