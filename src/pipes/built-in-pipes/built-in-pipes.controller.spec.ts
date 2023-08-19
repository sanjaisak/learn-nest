import { Test, TestingModule } from '@nestjs/testing';
import { BuiltInPipesController } from './built-in-pipes.controller';

describe('BuiltInPipeController', () => {
  let controller: BuiltInPipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuiltInPipesController],
    }).compile();

    controller = module.get<BuiltInPipesController>(BuiltInPipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
