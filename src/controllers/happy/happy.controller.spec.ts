import { Test, TestingModule } from '@nestjs/testing';
import { HappyController } from './happy.controller';

describe('HappyController', () => {
  let controller: HappyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HappyController],
    }).compile();

    controller = module.get<HappyController>(HappyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
