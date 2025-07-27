import { Controller, Get, Post, Body, Param, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from "../auth/auth.guard";
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("Orders")
@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(AuthGuard)
  async getOrder(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderService.getOrder(id);
  }

  @ApiBearerAuth()
  @Post()
  @UseGuards(AuthGuard)
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

}