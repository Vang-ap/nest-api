import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatUserDto } from './dto/creat.user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  create(userData: CreatUserDto) {
    const newUser = new User();

    newUser.username = userData.username;
    newUser.email = userData.email;
    newUser.password = userData.password;
    newUser.age = userData.age;
    newUser.city = userData.city;

    const result = this.userRepository.save(newUser);

    return result;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, userData: CreatUserDto) {
    this.userRepository.update({ id }, userData);
  }

  delete(id: number) {
    this.userRepository.delete(id);
  }
}