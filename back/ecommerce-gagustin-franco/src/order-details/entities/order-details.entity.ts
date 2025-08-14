import { Entity,PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, ManyToOne } from "typeorm";
import {v4 as uuid} from "uuid";
import { Order } from "../../orders/entities/orders.entity";
import { Product } from "../../products/entities/products.entity";

@Entity({
    name: "order_details"
})
export class OrderDetail {
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column('decimal', { precision: 10, scale: 2 })
    price: number

    @ManyToOne(() => Order, (order) => order.details)
    order: Order;

    @ManyToMany(() => Product, (product) => product.orderDetails)
    products: Product[];
    }
