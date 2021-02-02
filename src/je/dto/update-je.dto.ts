import { PartialType } from '@nestjs/mapped-types';
import { CreateJeDto } from './create-je.dto';
import { ApiProperty } from '@nestjs/swagger';
import { TaskType } from '../entities/je.entity';
import { Task } from '../../tasks/entities/task.entity';

export class UpdateJeDto extends PartialType(CreateJeDto) {
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
