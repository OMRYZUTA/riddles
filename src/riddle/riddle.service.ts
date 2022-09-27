import { Injectable } from '@nestjs/common';

@Injectable()
export class RiddleService {
    getDailyRiddle(){
        return 'daily riddle'
    }
}
