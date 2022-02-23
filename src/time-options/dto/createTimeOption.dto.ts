import { IsDateString, IsNumberString } from 'class-validator';
//Data Transfer Object
export class CreateTimeOptionDTO {
  @IsNumberString()
  day: number;

  @IsDateString()
  time: Date;
}
