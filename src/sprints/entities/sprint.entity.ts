import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sprint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 100,
  })
  description: string;

  @Column('datetime')
  fromDate: Date;

  @Column('datetime')
  toDate: Date;
}
