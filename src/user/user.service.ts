import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { CreateUserResponse } from './response/create.user.response';
import { User } from './user.entity';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(userData: CreateUserDto): Promise<CreateUserResponse> {
    const newUser = new User();

    newUser.username = userData.username;
    newUser.email = userData.email;
    newUser.password = await bcrypt.hash(userData.password, 10);
    newUser.age = userData.age;
    newUser.city = userData.city;

    const result = this.userRepository.save(newUser);

    return result;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  update(id: number, userData: CreateUserDto): Promise<UpdateResult> {
    return this.userRepository.update({ id }, userData);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}