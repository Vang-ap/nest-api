import { ApiProperty } from '@nestjs/swagger';

export class AuthenticationDto {
  @ApiProperty({ example: 'john.doe@google.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: 'totoTata$$', description: 'User password' })
  password: string;
}