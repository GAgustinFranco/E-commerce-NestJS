import { Repository, DataSource, MoreThan } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Order } from './entities/orders.entity';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { NotFoundException } from '@nestjs/common';
import { User } from '../users/entities/users.entity';
import { Product } from '../products/entities/products.entity';
import { OrderDetail } from '../order-details/entities/order-details.entity';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersRepository extends Repository<Order> {
    constructor(
        @InjectRepository(Order)
        private readonly repository: Repository<Order>,
        private dataSource: DataSource) {
        super(Order, dataSource.createEntityManager());
    }

    async getOrder(orderId: string): Promise<Order> {
        const order = await this.findOne({
        where: { id: orderId },
        relations: ['user', 'details', 'details.products'],
        });

        if (!order) {
        throw new NotFoundException(`Orden con ID ${orderId} no encontrada`);
        }

        return order;
    }

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        const { userId, products } = createOrderDto;

        const user = await this.manager.findOne(User, { where: { id: userId } });
        if (!user) {
        throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
        }

        const order = new Order();
        order.id = uuid();
        order.date = new Date();
        order.user = user;

        const orderDetail = new OrderDetail();
        orderDetail.id = uuid();
        orderDetail.order = order;
        orderDetail.products = [];
        orderDetail.price = 0;

    for (const productItem of products) {
        const product = await this.manager.findOne(Product, {
            where: { id: productItem.id, stock: MoreThan(0) },
        });

        if (!product) {
            throw new NotFoundException(
            `Producto con ID ${productItem.id} no encontrado o sin stock`
            );
        }

        product.stock -= 1;
        await this.manager.save(Product, product);

        orderDetail.products.push(product);
        orderDetail.price += Number(product.price);
        }

        order.details = [orderDetail];

        await this.manager.save(Order, order);
        await this.manager.save(OrderDetail, orderDetail);

        const orderToReturn = await this.getOrder(order.id);
        return orderToReturn;
    }
}