import { ApiProperty } from '@nestjs/swagger';

export class MeteoCityDto {
  @ApiProperty({ example: 'London', description: 'City name' })
  cityName: string;
}