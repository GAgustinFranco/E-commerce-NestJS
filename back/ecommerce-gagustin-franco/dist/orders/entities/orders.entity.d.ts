import { User } from "../../users/entities/users.entity";
import { OrderDetail } from "../../order-details/entities/order-details.entity";
export declare class Order {
    id: string;
    user: User;
    date: Date;
    details: OrderDetail[];
}
