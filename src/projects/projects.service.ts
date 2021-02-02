import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    try {
      const project = this.projectRepository.create(createProjectDto);
      return this.projectRepository.save(project);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: string) {
    return this.projectRepository.findOne(id);
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    try {
      const project = this.projectRepository.create(updateProjectDto);
      project.id = +id;
      return this.projectRepository.save(project);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  remove(id: string) {
    return this.projectRepository.delete(id);
  }
}
