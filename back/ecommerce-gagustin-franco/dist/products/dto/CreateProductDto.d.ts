import { Category } from '../../categories/entities/categories.entity';
import { OrderDetail } from '../../order-details/entities/order-details.entity';
export declare class CreateProductDto {
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category?: Category;
    orderDetails?: OrderDetail[];
}
