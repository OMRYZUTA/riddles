import { Test, TestingModule } from '@nestjs/testing';
import { RiddlePeriodService } from './riddle-period.service';
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";
import {getRepositoryToken} from "@nestjs/typeorm";

describe('RiddlePeriodService', () => {
  let service: RiddlePeriodService;
  let mockRepository = {
    find: jest.fn().mockImplementation(()=>
    Promise.resolve(
     []
    )),
    findOne: jest.fn().mockImplementation(({column})=>
    {
      let period = new RiddlePeriodEntity()
      period.isActive = true
      return  Promise.resolve(
            period
        )}
    ),

  }

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiddlePeriodService,{
        provide: getRepositoryToken(RiddlePeriodEntity),
        useValue: mockRepository,
      }],
    }).compile();

    service = module.get<RiddlePeriodService>(RiddlePeriodService);
  });



  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('fetchDailyRiddle when there is an active riddle period', () => {
    it('should return the daily riddle entity', async() => {
      const period = await service.fetchActiveRiddle()
       expect(period ).toBeInstanceOf(RiddlePeriodEntity)
    });
  });
});
