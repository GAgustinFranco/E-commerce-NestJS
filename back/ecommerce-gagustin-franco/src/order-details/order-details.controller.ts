import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from "./dto/CreateOrderDetailsDto";
import { UpdateOrderDetailDto } from './dto/UpdateOrderDetailsDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Order-details")
@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post()
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(createOrderDetailDto);
  }

  @Get()
  findAll() {
    return this.orderDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailsService.update(+id, updateOrderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderDetailsService.remove(+id);
  }
}
