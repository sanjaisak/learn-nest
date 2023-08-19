import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AgeValidatorPipe } from './age-validator.pipe';

@Controller('custom-pipes')
export class CustomPipesController {
  @Post('/age')
  @UsePipes(AgeValidatorPipe)
  getValidAge(@Body('age') age: number) {
    return age;
  }
}
