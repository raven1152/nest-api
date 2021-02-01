import { PartialType } from '@nestjs/mapped-types';
import { CreateJeDto } from './create-je.dto';

export class UpdateJeDto extends PartialType(CreateJeDto) {}
