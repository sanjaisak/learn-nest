import {
  Body,
  Controller,
  DefaultValuePipe,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BuiltInPipesService } from './built-in-pipes.service';
import { ValidationPipeDto } from './validationPipeDto/validationPipe.dto';

@Controller('built-in-pipes')
export class BuiltInPipesController {
  constructor(private builtInPipeService: BuiltInPipesService) {}

  /**
   * Example to use show param without pipe
   *
   * @param param contains a input
   * @returns types of the param
   */
  @Post()
  public getType(@Body('number') number: number) {
    return `${number} is of type ${this.builtInPipeService.getType(number)}`;
  }

  /**
   * Example to use parseIntPipe
   *
   * @param param contains a input
   * @returns types of the param
   */
  @Post('/parseIntPipe')
  public paseToInt(@Body('number', new ParseIntPipe()) number: number) {
    return `${number} is of type ${this.builtInPipeService.getType(number)}`;
  }

  /**
   * Example to use parseToFloat
   *
   * @param param contains a input
   * @returns types of the param
   */
  @Post('/parseFloatPipe')
  public paseToFloat(@Body('number', new ParseFloatPipe()) number: number) {
    return `${number} is of type ${this.builtInPipeService.getType(number)}`;
  }

  /**
   * Example to use default pipe
   *
   * @param number contains a input
   * @returns number which is sent input
   */
  @Post('/DefaultValuePipe')
  public defaultValue(
    @Body('number', new DefaultValuePipe('10')) number: number,
  ) {
    return number;
  }

  /**
   * Example of validation Pipe
   *
   * @param number contains a input
   * @returns number which is sent input
   */
  @Post('/ValidationPipe')
  @UsePipes(new ValidationPipe())
  public validationPipe(@Body() ValidationPipeDto: ValidationPipeDto) {
    return ValidationPipeDto.number;
  }
}
