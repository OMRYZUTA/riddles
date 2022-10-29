import { Module } from '@nestjs/common';
import {RiddlePhotoService} from "./riddle-photo.service";

@Module({exports:[RiddlePhotoService],
                    providers:[RiddlePhotoService]})
export class RiddlePhotoModule {

}
