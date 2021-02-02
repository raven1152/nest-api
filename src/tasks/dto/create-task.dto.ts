import { ApiProperty } from '@nestjs/swagger';
import { Project } from '../../projects/entities/project.entity';

export class CreateTaskDto {
  @ApiProperty()
  taskId: number;

  @ApiProperty()
  taskDescription: string;

  @ApiProperty({ type: 'float' })
  plannedDuration: number;

  @ApiProperty()
  project: Project;
}
