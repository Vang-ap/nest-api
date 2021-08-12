import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreatUserDto } from './dto/creat.user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  async create(
    @Body()
    userData: CreatUserDto,
  ) {
    return this.userService.create(userData);
  }
}
