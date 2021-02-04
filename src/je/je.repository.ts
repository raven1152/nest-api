import { Je } from './entities/je.entity';
import { Between, EntityRepository, Like, Repository } from 'typeorm';

@EntityRepository(Je)
export class JeRepository extends Repository<Je> {
  getDays(fromDate: Date, toDate: Date) {
    return this.find({
      startAt: Between(fromDate, toDate),
    });
  }
}
