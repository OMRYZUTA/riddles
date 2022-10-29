import {Test, TestingModule} from '@nestjs/testing';
import {RiddlePhotoService} from './riddle-photo.service';

describe('RiddlePhotoService', () => {
    let service: RiddlePhotoService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RiddlePhotoService],
        }).compile();

        service = module.get<RiddlePhotoService>(RiddlePhotoService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it("should return a photo", async () => {
        let res = await service.getPhoto("tiger")
        expect(res).not.toBe("");
    })
});
