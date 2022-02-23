import { IsNumber } from 'class-validator';
import { CreateAddressesDTO } from './createAddresses.dto';
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class UpdateAddressesDTO extends PartialType(
  OmitType(CreateAddressesDTO, [] as const),
) {
  @IsNumber()
  id: number;
}
