import { User } from './entities/user.entity';
import { EntityRepository, Like, Repository } from 'typeorm';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  findStuff(stuff: string) {
    return this.find({
      // this structure yields an OR condition between the two like statements
      where: [
        {
          lastName: Like(`%${stuff}%`),
        },
        {
          firstName: Like(`%${stuff}%`),
        },
      ],
    });
  }
}
