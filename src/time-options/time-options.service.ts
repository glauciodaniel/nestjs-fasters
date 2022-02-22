import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TimeOptionsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.timeOption.findMany();
  }
  async get(id: number) {
    return {};
  }
  async create({}) {
    return {};
  }
  async update(id: number, {}) {
    return {};
  }
  async delete(id: number) {
    return {};
  }
}
