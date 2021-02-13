import { ApiProperty } from '@nestjs/swagger';

export class CreateSprintDto {
  @ApiProperty()
  description: string;

  @ApiProperty()
  fromDate: Date;

  @ApiProperty()
  toDate: Date;
}
