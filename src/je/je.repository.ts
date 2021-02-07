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

  async getDaysEx(fromDate: Date, toDate: Date) {
    const from: Date = new Date(fromDate);
    const to: Date = new Date(toDate);

    try {
      const rv = await this.createQueryBuilder('je')
        .leftJoinAndSelect('je.task', 'task')
        .select()
        .from(Je, 'je')
        .where('je.startAt between :from and :to', { from, to })
        .getMany();
      console.log(rv);
      return rv;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
