import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserResponse } from './response/create.user.response';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({
    status: 200,
    description: 'The created user',
    type: CreateUserResponse,
  })
  @Post()
  async create(
    @Body()
    userData: CreateUserDto,
  ): Promise<CreateUserResponse> {
    return this.userService.create(userData);
  }

  @ApiResponse({
    status: 200,
    description: 'All users',
    type: [CreateUserResponse],
  })
  @Get()
  findAll(): Promise<CreateUserResponse[]> {
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
    userData: CreateUserDto,
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
