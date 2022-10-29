import { Injectable } from '@nestjs/common';
import { createClient } from 'pexels';

@Injectable()
export class RiddlePhotoService {
    private client:any
    constructor() {
        this.client = createClient(process.env.RIDDLE_PHOTO_TOKEN!)
    }
    public async getPhoto(query: string | undefined){
        let res =  await this.client.photos.search({query,per_page: 1})
        return res.photos[0].src.medium
    }
}
