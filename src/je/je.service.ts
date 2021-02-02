import { Injectable } from '@nestjs/common';
import { CreateJeDto } from './dto/create-je.dto';
import { UpdateJeDto } from './dto/update-je.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Je } from './entities/je.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JeService {
  constructor(
    @InjectRepository(Je)
    private jeRepository: Repository<Je>,
  ) {}

  create(createJeDto: CreateJeDto) {
    try {
      const je = this.jeRepository.create(createJeDto);
      return this.jeRepository.save(je);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  findAll() {
    return this.jeRepository.find();
  }

  findOne(id: string) {
    return this.jeRepository.findOne(id);
  }

  update(id: string, updateJeDto: UpdateJeDto) {
    try {
      const je = this.jeRepository.create(updateJeDto);
      je.id = +id;
      return this.jeRepository.save(je);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  remove(id: string) {
    return this.jeRepository.delete(id);
  }
}
