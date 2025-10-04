import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/CreateOrder.dto';
import { Order } from './entities/orders.entity';
export declare class OrdersService {
    private readonly orderRepository;
    constructor(orderRepository: OrdersRepository);
    getOrder(id: string): Promise<Order>;
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
}
