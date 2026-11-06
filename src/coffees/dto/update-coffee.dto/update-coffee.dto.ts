import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto.js';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
