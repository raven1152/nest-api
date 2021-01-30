import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 50,
  })
  userName: string;

  @Column('varchar', {
    length: 50,
  })
  firstName: string;

  @Column('varchar', {
    length: 50,
  })
  lastName: string;

  @Column('tinyint')
  isActive: boolean;
}
