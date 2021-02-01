import { Module } from '@nestjs/common';
import { JeService } from './je.service';
import { JeController } from './je.controller';
import { Je } from './entities/je.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Je])],
  controllers: [JeController],
  providers: [JeService],
})
export class JeModule {}
