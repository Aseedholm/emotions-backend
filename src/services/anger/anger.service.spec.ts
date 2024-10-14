import { Test, TestingModule } from '@nestjs/testing';
import { AngerService } from './anger.service';

describe('AngerService', () => {
  let service: AngerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AngerService],
    }).compile();

    service = module.get<AngerService>(AngerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
