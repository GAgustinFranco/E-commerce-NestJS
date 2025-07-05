import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDetailDto } from './createOrderDetailsDto';

export class UpdateOrderDetailDto extends PartialType(CreateOrderDetailDto) {}