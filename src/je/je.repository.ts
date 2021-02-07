import { Je } from './entities/je.entity';
import { Between, EntityRepository, FindManyOptions, Like, MoreThan, Repository } from 'typeorm';

@EntityRepository(Je)
export class JeRepository extends Repository<Je> {
  getDays(fromDate: Date, toDate: Date) {
    const from: Date = new Date(fromDate);
    const to: Date = new Date(toDate);

    const options = {
      relations: ['task', 'task.project'],
      where: {
        startAt: Between(from, to),
      },
    } as FindManyOptions<Je>;

    return this.find(options);
  }

  getDaysWithTasks(fromDate: Date, toDate: Date) {
    return this.manager.createQueryBuilder()
      .select()
      .from(Je, "je")
      .getMany();
  }
}
