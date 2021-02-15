import { Injectable } from '@nestjs/common';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sprint } from './entities/sprint.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class SprintsService {
  constructor(
    @InjectRepository(Sprint)
    private sprintRepository: Repository<Sprint>,
  ) {}

  create(createSprintDto: CreateSprintDto) {
    try {
      const sprint: Sprint = this.sprintRepository.create(createSprintDto);
      return this.sprintRepository.save(sprint);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  findAll() {
    return this.sprintRepository.find();
  }

  findOne(id: string) {
    return this.sprintRepository.findOne(id);
  }

  update(id: string, updateSprintDto: UpdateSprintDto) {
    try {
      const sprint: Sprint = this.sprintRepository.create(updateSprintDto);
      sprint.id = +id;
      return this.sprintRepository.save(sprint);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  remove(id: string) {
    return this.sprintRepository.delete(id);
  }
}
