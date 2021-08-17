import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';

import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async authenticate(email: string, password: string): Promise<{ access_token: string }> {
    const user: User = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not exist');
    }

    const passwordMatching = await bcrypt.compare(password, user.password);

    if (!passwordMatching) {
      throw new ForbiddenException('Bad password');
    }

    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}