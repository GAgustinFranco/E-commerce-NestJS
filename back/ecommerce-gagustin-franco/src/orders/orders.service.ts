import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import { AddOrderDto } from './dto/addOrder.dto';
import { Order } from './entities/orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRepository)
    private readonly orderRepository: OrdersRepository
  ) {}

  async getOrder(id: string): Promise<Order> {
    return this.orderRepository.getOrder(id);
  }

  async addOrder(addOrderDto: AddOrderDto): Promise<Order> {
    return this.orderRepository.addOrder(addOrderDto);
  }
}
