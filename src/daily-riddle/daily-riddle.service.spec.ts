import { Test, TestingModule } from '@nestjs/testing';
import { DailyRiddleService } from './daily-riddle.service';

describe('DailyRiddleService', () => {
  let service: DailyRiddleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyRiddleService],
    }).compile();

    service = module.get<DailyRiddleService>(DailyRiddleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
