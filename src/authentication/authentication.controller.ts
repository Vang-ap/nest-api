import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthenticationDto } from './authentication.dto/authentication.dto';
import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) { }

  @ApiOperation({ summary: 'Authenticate a user' })
  @Post()
  async authenticate(
    @Body()
    authenticateData: AuthenticationDto,
  ): Promise<boolean> {
    const { email, password } = authenticateData;

    return this.authenticationService.authenticate(email, password);
  }
}