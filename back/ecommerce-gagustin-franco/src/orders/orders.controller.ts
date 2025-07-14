import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { AddOrderDto } from './dto/addOrder.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(id);
  }

  @Post()
  async addOrder(@Body() addOrderDto: AddOrderDto) {
    return this.orderService.addOrder(addOrderDto);
  }

}