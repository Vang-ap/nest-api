import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreatUserDto } from './dto/creat.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({
    status: 200,
    description: 'The created user',
    type: CreatUserDto,
  })
  @Post()
  async create(
    @Body()
    userData: CreatUserDto,
  ) {
    return this.userService.create(userData);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  find(
    @Param('id')
    id: number,
  ) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id')
    id: number,
    @Body()
    userData: CreatUserDto,
  ) {
    this.userService.update(id, userData);
  }

  @Delete(':id')
  delete(
    @Param('id')
    id: number,
  ) {
    this.userService.delete(id);
  }
}
