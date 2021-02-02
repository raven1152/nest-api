import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    try {
      const task: Task = this.taskRepository.create(createTaskDto);
      return this.taskRepository.save(task);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findOne(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const task: Task = this.taskRepository.create(updateTaskDto);
      task.id = +id;
      return this.taskRepository.save<Task>(task);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  remove(id: string) {
    return this.taskRepository.delete(id);
  }
}
