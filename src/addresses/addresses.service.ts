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

  async update(id: number, data: UpdateAddressesDTO) {
    if (data.zipCode) {
      data.zipCode = data.zipCode.replace('-', '');
    }
    // if (data.personId) {
    //   data.personId = Number(data.personId);
    // }

    await this.get(+id);

    return this.prisma.addresses.update({
      data,
      where: { id: +id },
    });
  }
  async delete(id: number) {}
}
