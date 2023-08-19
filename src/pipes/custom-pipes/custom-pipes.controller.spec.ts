import { Test, TestingModule } from '@nestjs/testing';
import { CustomPipesController } from './custom-pipes.controller';

describe('CustomPipesController', () => {
  let controller: CustomPipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomPipesController],
    }).compile();

    controller = module.get<CustomPipesController>(CustomPipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
