import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    dailyRiddle: string = 'What is green from the outside and red from the inside and have a watermelon seed';

    getHello(): string {
        return this.dailyRiddle;
    }
}
