import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressesDTO } from './dto/createAddresses.dto';
import { UpdateAddressesDTO } from './dto/updateAddresses.dto';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.addresses.findMany();
  }
  async get(id: number) {
    id = Number(id);
    if (isNaN(id)) {
      throw new BadRequestException('ID is required.');
    }

    const address = await this.prisma.addresses.findUnique({
      where: {
        id,
      },
    });
    if (!address) {
      throw new BadRequestException('Address not found.');
    }

    return address;
  }

  async create(data: CreateAddressesDTO) {
    const {
      street,
      district,
      number,
      complement,
      city,
      state,
      country,
      zipCode,
      personId,
    } = data;

    const { id } = await this.prisma.user.findUnique({
      where: {
        id: +personId,
      },
    });

    if (!id) {
      throw new BadRequestException('User not found.');
    }

    return this.prisma.addresses.create({
      data: {
        personId: +id,
        street,
        number,
        complement,
        district,
        city,
        state,
        country,
        zipCode: zipCode.replace('-', ''),
      },
    });
  }

  async update(data: UpdateAddressesDTO) {}
  async delete(id: number) {}
}
