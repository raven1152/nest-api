import { PartialType } from '@nestjs/mapped-types';
import { CreateSprintDto } from './create-sprint.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSprintDto extends PartialType(CreateSprintDto) {
  @ApiProperty()
  description: string;

  @ApiProperty()
  fromDate: Date;

  @ApiProperty()
  toDate: Date;
}
