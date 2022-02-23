import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeOptionDTO } from './dto/createTimeOption.dto';
import { UpdateTimeOptionDTO } from './dto/updateTimeOption.dto';

@Injectable()
export class TimeOptionsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.timeOption.findMany();
  }
  async get(id: number) {
    id = Number(id);
    if (isNaN(id)) {
      throw new BadRequestException('ID is required.');
    }

    const timeOption = await this.prisma.timeOption.findUnique({
      where: {
        id,
      },
    });
    if (!timeOption) {
      throw new BadRequestException('Time option not found.');
    }

    return timeOption;
  }

  async create(data: CreateTimeOptionDTO) {
    let { day, time } = data;

    if (!day) {
      throw new BadRequestException('Day is required.');
    }
    if (!time) {
      throw new BadRequestException('Time is required.');
    }

    day = Number(day);
    //const timeOptionDate = new Date(time);
    //const hoursMinutes = `${timeOptionDate.getHours()}:${timeOptionDate.getMinutes()}`;
    time = new Date(time);

    return this.prisma.timeOption.create({
      data: {
        day,
        time,
      },
    });
  }

  async update(data: UpdateTimeOptionDTO) {
    let { id } = data;
    const { day, time } = data;

    id = Number(id);

    if (isNaN(id)) {
      throw new BadRequestException('ID is required');
    }

    const dataTimeOption = {} as Prisma.TimeOptionUpdateInput;

    if (day) {
      dataTimeOption.day = +day;
    }
    if (time) {
      dataTimeOption.time = new Date(time);
    }

    const idTimeOption = await this.get(id);

    if (!idTimeOption) {
      throw new BadRequestException('ID not found');
    }

    return this.prisma.timeOption.update({
      data: dataTimeOption,
      where: {
        id,
      },
    });
  }
  async delete(id: number) {
    id = Number(id);

    if (isNaN(id)) {
      throw new BadRequestException('ID is required');
    }

    const timeOption = await this.get(id);

    //pm2 logs
    try {
      if (!timeOption) {
        throw new BadRequestException('Time option not found');
      }
      return this.prisma.timeOption.delete({
        where: { id },
      });
    } catch (error) {
      return { error: 'Time Option not Found' };
    }
  }
}
