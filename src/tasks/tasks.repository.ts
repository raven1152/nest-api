import { Task } from './entities/task.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async getActiveTasksEx() {
    return await this.find();
  }
}
