import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User name' })
  username: string;

  @ApiProperty({ example: 'john.doe@google.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'totoTata$$', description: 'User password' })
  password: string;

  @ApiProperty({ example: 39, description: 'User age' })
  age: number;

  @ApiProperty({ example: 'London', description: 'User city' })
  city: string;
}