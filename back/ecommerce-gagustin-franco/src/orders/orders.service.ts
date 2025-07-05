import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './orders.repository';
import { CreateOrderDto } from './dto/createOrder.dto';
import { Order } from './entities/orders.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderRepository)
    private readonly orderRepository: OrderRepository
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderRepository.addOrder(createOrderDto);
  }

  async getOrder(id: string): Promise<Order> {
    return this.orderRepository.getOrder(id);
  }
}