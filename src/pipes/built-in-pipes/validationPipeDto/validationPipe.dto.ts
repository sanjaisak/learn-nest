import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class ValidationPipeDto {
  @IsNotEmpty()
  number: number;
}

// This makes validation pipe date properties as optional
export class updatedValidationPipeDto extends PartialType(ValidationPipeDto) {}
