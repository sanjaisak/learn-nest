import { Module } from '@nestjs/common';
import { BuiltInPipesController } from './built-in-pipes/built-in-pipes.controller';
import { BuiltInPipesService } from './built-in-pipes/built-in-pipes.service';
import { CustomPipesController } from './custom-pipes/custom-pipes.controller';

@Module({
  controllers: [BuiltInPipesController, CustomPipesController],
  providers: [BuiltInPipesService],
})
export class PipesModule {}
