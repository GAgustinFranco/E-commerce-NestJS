import { Order } from "../../orders/entities/orders.entity";
import { File } from "../../files/entities/file.entity";
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    address: string;
    city: string;
    isAdmin: boolean;
    orders: Order[];
    files: File[];
}
