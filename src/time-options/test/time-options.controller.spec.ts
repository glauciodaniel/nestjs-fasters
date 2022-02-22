import { Test, TestingModule } from '@nestjs/testing';
import { TimeOptionsController } from './time-options.controller';

describe('TimeOptionsController', () => {
  let controller: TimeOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeOptionsController],
    }).compile();

    controller = module.get<TimeOptionsController>(TimeOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
