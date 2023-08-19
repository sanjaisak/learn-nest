import { Test, TestingModule } from '@nestjs/testing';
import { BuiltInPipesService } from './built-in-pipes.service';

describe('BuiltInPipesService', () => {
  let service: BuiltInPipesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuiltInPipesService],
    }).compile();

    service = module.get<BuiltInPipesService>(BuiltInPipesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
