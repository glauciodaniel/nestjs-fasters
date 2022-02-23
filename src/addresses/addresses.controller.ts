import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressesDTO } from './dto/createAddresses.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private addressesService: AddressesService) {}

  @Get()
  async getAll() {
    return this.addressesService.getAll();
  }

  @Get(':id')
  async getById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.addressesService.get(id);
  }

  // @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: CreateAddressesDTO) {
    return this.addressesService.create(data);
  }

  // @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() data) {
    const { street } = data;
    return this.addressesService.update(street);
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.addressesService.delete(id);
  }
}
