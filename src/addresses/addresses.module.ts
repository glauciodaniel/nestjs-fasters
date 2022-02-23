import { Module } from '@nestjs/common';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AddressesController],
  providers: [AddressesService, PrismaService],
})
export class AddressesModule {}
