import {Test, TestingModule} from '@nestjs/testing';
import {DailyRiddleService} from './daily-riddle.service';
import {RiddlePeriodService} from "../riddle-period/riddle-period.service";
import {RiddleEntity} from "../db/entity/riddle.entity";
import {RiddleService} from "../riddle/riddle.service";
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";

describe('DailyRiddleService', () => {
    let service: DailyRiddleService;
    const mockRiddlePeriodService = {
        fetchActiveRiddles: () => [],
        startNewPeriod: () => new RiddlePeriodEntity(),
    }
    const mockRiddleService = {
        getNewRiddle: () => new RiddleEntity()
    }
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            // imports: [RiddlePeriodService, RiddleService],
            providers: [DailyRiddleService, {
                provide: RiddlePeriodService,
                useValue: mockRiddlePeriodService,
            },{
                provide: RiddleService,
                useValue: mockRiddleService,
            }],
        }).compile();

        service = module.get<DailyRiddleService>(DailyRiddleService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('getDailyRiddle', () => {
        describe('when there is no active riddle period', () => {
            it('should create a new riddle period', async() => {
                jest.spyOn(mockRiddleService,'getNewRiddle').mockImplementation( ()=>{
                    let riddle = new RiddleEntity()
                    riddle.question = 'What is above the shoulders?'
                    riddle.answer = 'Head'
                    riddle.isActive = true
                    riddle.id = '324234dsjfjf'
                    return riddle;
                })
              await expect(service.getDailyRiddle()).resolves.toBeInstanceOf(RiddleEntity);
            })
        });
    })
})
