import { ApiProperty } from '@nestjs/swagger';
import { TaskType } from '../entities/je.entity';
import { Task } from '../../tasks/entities/task.entity';

export class CreateJeDto {
  @ApiProperty()
  startAt: Date;

  @ApiProperty()
  finishAt: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  notes: string;

  @ApiProperty()
  taskType: TaskType;

  @ApiProperty()
  task: Task;
}
