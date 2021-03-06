import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 50,
  })
  projectCode: string;

  @Column('varchar', {
    length: 100,
  })
  projectDescription: string;

  @Column('varchar', {
    length: 20,
  })
  projectTask: string;
}
