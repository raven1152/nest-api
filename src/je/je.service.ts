import { Injectable } from '@nestjs/common';
// import { CreateJeDto } from './dto/create-je.dto';
// import { UpdateJeDto } from './dto/update-je.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Je } from './entities/je.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JeService {
  constructor(
    @InjectRepository(Je)
    private jeRepository: Repository<Je>,
  ) {}

  // create(createJeDto: CreateJeDto) {
  //   return 'This action adds a new je';
  // }

  findAll() {
    return this.jeRepository.find();
  }

  findOne(id: string) {
    return this.jeRepository.findOne(id);
  }

  // update(id: number, updateJeDto: UpdateJeDto) {
  //   return `This action updates a #${id} je`;
  // }

  remove(id: string) {
    return this.jeRepository.delete(id);
  }
}
