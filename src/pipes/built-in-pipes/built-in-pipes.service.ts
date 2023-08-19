import { Injectable } from '@nestjs/common';

@Injectable()
export class BuiltInPipesService {
  /**
   * Used get the type of input
   *
   * @param input contains a input of type any
   * @returns type of the input
   */
  public getType(input) {
    return typeof input;
  }
}
