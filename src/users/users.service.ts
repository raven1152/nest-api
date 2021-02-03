import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, getCustomRepository, In, Like, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user: User = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  findStuff(stuff: string) {
    const usersRepository: UsersRepository = getCustomRepository(
      UsersRepository,
    );
    try {
      return usersRepository.findStuff(stuff);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user: User = this.userRepository.create(updateUserDto);
      user.id = +id;
      return this.userRepository.save<User>(user);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
