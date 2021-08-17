import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthenticationDto } from './authentication.dto/authentication.dto';
import { AuthenticationService } from './authentication.service';
import { JwtAutehGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) { }

  @ApiOperation({ summary: 'Authenticate a user' })
  @Post('login')
  async authenticate(
    @Body()
    authenticateData: AuthenticationDto,
  ): Promise<{ access_token: string }> {
    const { email, password } = authenticateData;

    return this.authenticationService.authenticate(email, password);
  }

  @ApiOperation({ summary: 'Get my user' })
  @UseGuards(JwtAutehGuard)
  @Get('user')
  async getUser(
    @Request() req
  ): Promise<boolean> {
    console.log(req.user);
    return true;
  }
}