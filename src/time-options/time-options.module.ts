import { Module } from '@nestjs/common';
import { TimeOptionsService } from './time-options.service';
import { TimeOptionsController } from './time-options.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TimeOptionsService],
  controllers: [TimeOptionsController],
})
export class TimeOptionsModule {}
