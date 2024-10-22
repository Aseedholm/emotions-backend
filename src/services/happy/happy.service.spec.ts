import { Test, TestingModule } from '@nestjs/testing';
import { HappyService } from './happy.service';

describe('HappyService', () => {
  let service: HappyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HappyService],
    }).compile();

    service = module.get<HappyService>(HappyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
