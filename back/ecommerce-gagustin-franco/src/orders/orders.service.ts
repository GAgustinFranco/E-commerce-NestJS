import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/CreateOrder.dto';
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

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderRepository.createOrder(createOrderDto);
  }
}
