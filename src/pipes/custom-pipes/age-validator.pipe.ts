import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class AgeValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const age = parseInt(value, 10);
    if (isNaN(age) || age < 0 || age > 150) {
      throw new BadRequestException('Invalid age');
    }

    return age;
  }
}
