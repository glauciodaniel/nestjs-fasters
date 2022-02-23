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
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTimeOptionDTO } from './dto/createTimeOption.dto';
import { TimeOptionsService } from './time-options.service';

@Controller('time-options')
export class TimeOptionsController {
  constructor(private timeOptionsService: TimeOptionsService) {}

  // Get método pega todos, não tem filtro
  @Get()
  async getAll() {
    return this.timeOptionsService.getAll();
  }

  @Get(':id')
  async getById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.timeOptionsService.get(id);
  }

  // @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: CreateTimeOptionDTO) {
    return this.timeOptionsService.create(data);
  }

  // @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() data) {
    const { day, time } = data;
    const dataTimeOption = { id, day, time };
    return this.timeOptionsService.update(dataTimeOption);
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.timeOptionsService.delete(id);
  }
}
