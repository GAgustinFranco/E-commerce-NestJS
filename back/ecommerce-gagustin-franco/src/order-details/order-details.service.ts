import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from "./dto/createOrderDetailsDto";
import { UpdateOrderDetailDto } from './dto/updateOrderDetailsDto';

@Injectable()
export class OrderDetailsService {
  create(createOrderDetailDto: CreateOrderDetailDto) {
    return 'This action adds a new orderDetail';
  }

  findAll() {
    return `This action returns all orderDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
