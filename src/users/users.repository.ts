import { User } from './entities/user.entity';
import { EntityRepository, Like, Repository } from 'typeorm';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  findStuff(stuff: string) {
    return this.find({
      lastName: Like(`%${stuff}%`),
      firstName: Like(`%${stuff}%`)
    });
  }
}
