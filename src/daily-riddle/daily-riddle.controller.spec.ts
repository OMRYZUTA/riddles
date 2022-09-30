import { Test, TestingModule } from '@nestjs/testing';
import { DailyRiddleController } from './daily-riddle.controller';

describe('DailyRiddleController', () => {
  let controller: DailyRiddleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyRiddleController],
    }).compile();

    controller = module.get<DailyRiddleController>(DailyRiddleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
