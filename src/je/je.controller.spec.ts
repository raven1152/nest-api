import { Test, TestingModule } from '@nestjs/testing';
import { JeController } from './je.controller';
import { JeService } from './je.service';

describe('JeController', () => {
  let controller: JeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JeController],
      providers: [JeService],
    }).compile();

    controller = module.get<JeController>(JeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
