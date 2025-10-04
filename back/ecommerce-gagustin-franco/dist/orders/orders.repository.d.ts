import { Repository, DataSource } from 'typeorm';
import { Order } from './entities/orders.entity';
import { CreateOrderDto } from './dto/CreateOrder.dto';
export declare class OrdersRepository extends Repository<Order> {
    private readonly repository;
    private dataSource;
    constructor(repository: Repository<Order>, dataSource: DataSource);
    getOrder(orderId: string): Promise<Order>;
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
}
