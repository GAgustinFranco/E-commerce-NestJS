import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDetailDto } from './CreateOrderDetailsDto';

export class UpdateOrderDetailDto extends PartialType(CreateOrderDetailDto) {}