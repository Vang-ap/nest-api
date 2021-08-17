import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserResponse } from './response/create.user.response';
import { UpdateUserResponse } from './response/update.user.response';
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

  @ApiOperation({ summary: 'Read all users' })
  @ApiResponse({
    status: 200,
    description: 'All users',
    type: [CreateUserResponse],
  })
  @Get()
  findAll(): Promise<CreateUserResponse[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Read user by id' })
  @ApiResponse({
    status: 200,
    description: 'user by id',
    type: CreateUserResponse,
  })
  @Get(':id')
  find(
    @Param('id')
    id: number,
  ) {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Update user by id' })
  @ApiResponse({
    status: 200,
    description: 'Update user',
    type: UpdateUserResponse,
  })
  @Put(':id')
  update(
    @Param('id')
    id: number,
    @Body()
    userData: CreateUserDto,
  ) {
    this.userService.update(id, userData);
  }

  @ApiOperation({ summary: 'Delete user by id' })
  @Delete(':id')
  delete(
    @Param('id')
    id: number,
  ) {
    this.userService.delete(id);
  }
}
