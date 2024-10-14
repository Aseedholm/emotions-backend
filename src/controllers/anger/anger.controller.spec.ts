import { Test, TestingModule } from '@nestjs/testing';
import { AngerController } from './anger.controller';

describe('AngerController', () => {
  let controller: AngerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AngerController],
    }).compile();

    controller = module.get<AngerController>(AngerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
