import { Order } from "../../orders/entities/orders.entity";
import { Product } from "../../products/entities/products.entity";
export declare class OrderDetail {
    id: string;
    price: number;
    order: Order;
    products: Product[];
}
