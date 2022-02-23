import { Test, TestingModule } from '@nestjs/testing';
import { TimeOptionsService } from '../time-options.service';

describe('TimeOptionsService', () => {
  let service: TimeOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeOptionsService],
    }).compile();

    service = module.get<TimeOptionsService>(TimeOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
