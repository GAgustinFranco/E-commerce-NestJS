import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/orders.entity';
import { OrderDetail } from '../order-details/entities/order-details.entity';
import { Product } from "../products/entities/products.entity";
import { OrdersRepository } from './orders.repository';


@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDetail, Product])],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersRepository]
})
export class OrdersModule {}
