import { Test, TestingModule } from '@nestjs/testing';
import { RiddlePeriodHandlerService } from './riddle-period-handler.service';

describe('RiddlePeriodHandlerService', () => {
  let service: RiddlePeriodHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiddlePeriodHandlerService],
    }).compile();

    service = module.get<RiddlePeriodHandlerService>(RiddlePeriodHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
