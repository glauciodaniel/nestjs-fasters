import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsPostalCode,
  IsString,
} from 'class-validator';

export class CreateAddressesDTO {
  @IsNumberString()
  @IsNotEmpty()
  personId: number;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsOptional()
  number?: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsString()
  @IsNotEmpty()
  district: string;
  city: string;
  state: string;
  country: string;

  @IsString()
  @IsNotEmpty()
  @IsPostalCode('BR')
  zipCode: string;
}
