import { Entity,PrimaryGeneratedColumn, Column, OneToOne, ManyToMany } from "typeorm";
import {v4 as uuid} from "uuid";
import { Order } from "../../orders/entities/orders.entity";
import { Product } from "../../products/entities/products.entity";

@Entity({
    name: "order_details"
})
export class OrderDetail {
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column()
    price: number

    @OneToOne(() => Order, (order) => order.detail)
    order: Order;

    @ManyToMany(() => Product, (product) => product.orderDetails)
    products: Product[];
    }
