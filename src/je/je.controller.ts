import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { JeService } from './je.service';
import { CreateJeDto } from './dto/create-je.dto';
import { UpdateJeDto } from './dto/update-je.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('api')
@Controller('je')
export class JeController {
  constructor(private readonly jeService: JeService) {}

  @Post()
  create(@Body() createJeDto: CreateJeDto) {
    return this.jeService.create(createJeDto);
  }

  @Get()
  findAll() {
    return this.jeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateJeDto: UpdateJeDto) {
    return this.jeService.update(id, updateJeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jeService.remove(id);
  }
}
