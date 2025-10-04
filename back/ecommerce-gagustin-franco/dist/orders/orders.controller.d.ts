import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/CreateOrder.dto';
export declare class OrdersController {
    private readonly orderService;
    constructor(orderService: OrdersService);
    getOrder(id: string): Promise<import("./entities/orders.entity").Order>;
    createOrder(createOrderDto: CreateOrderDto): Promise<import("./entities/orders.entity").Order>;
}
