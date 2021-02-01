import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';

export enum TaskType {
  Capital,
  OpMaint,
  Milestone,
  Meeting,
  OrgDev,
  Break,
}

@Entity()
export class Je {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime')
  startAt: Date;

  @Column('datetime')
  finishAt: Date;

  @Column('varchar', {
    length: 100,
  })
  description: string;

  @Column('text')
  notes: string;

  @Column({
    type: 'enum',
    enum: TaskType,
    default: TaskType.OpMaint,
  })
  taskType: TaskType;

  @ManyToOne(() => Task)
  @JoinColumn()
  task: Task;
}
