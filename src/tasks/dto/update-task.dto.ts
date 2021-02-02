import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Project } from '../../projects/entities/project.entity';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty()
  taskId: number;

  @ApiProperty()
  taskDescription: string;

  @ApiProperty({ type: 'float' })
  plannedDuration: number;

  @ApiProperty()
  project: Project;
}
