import { Test, TestingModule } from '@nestjs/testing';
import { JeService } from './je.service';

describe('JeService', () => {
  let service: JeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JeService],
    }).compile();

    service = module.get<JeService>(JeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
