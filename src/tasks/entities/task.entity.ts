import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  taskId: number;

  @Column('varchar', {
    length: 250,
  })
  taskDescription: string;

  @Column('float')
  plannedDuration: number;

  @ManyToOne(() => Project)
  @JoinColumn()
  project: Project;
}
