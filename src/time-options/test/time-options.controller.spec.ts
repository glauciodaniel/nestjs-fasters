import { Test, TestingModule } from '@nestjs/testing';
import { TimeOptionsController } from '../time-options.controller';
import { TimeOptionsService } from '../time-options.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('TimeOptionController', () => {
  let controller: TimeOptionsController;
  let service: TimeOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeOptionsController],
      providers: [TimeOptionsService, PrismaService],
    }).compile();

    service = module.get<TimeOptionsService>(TimeOptionsService);
    controller = module.get<TimeOptionsController>(TimeOptionsController);
  });

  describe('getAll', () => {
    it('should return an array of time_options', async () => {
      const getAll = await controller.getAll();
      // const getAll =  jest.spyOn(service, 'getAll');

      expect(getAll).not.toBe([{}]);
    });
  });
});
