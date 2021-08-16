import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';

import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService) { }

  async authenticate(email: string, password: string): Promise<boolean> {
    const user: User = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not exist');
    }

    const passwordMatching = await bcrypt.compare(password, user.password);

    if (!passwordMatching) {
      throw new ForbiddenException('Bad password');
    }

    return true;
  }
}