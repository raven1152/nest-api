import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty()
  projectCode: string;

  @ApiProperty()
  projectDescription: string;

  @ApiProperty()
  projectTask: string;
}
