import { IsDate, IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class UpdateTimeOptionDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(31)
  day?: number;

  @IsDate()
  @IsOptional()
  time?: Date;
}
