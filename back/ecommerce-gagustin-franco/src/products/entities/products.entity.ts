import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuid} from "uuid";
import { Category } from "../../categories/entities/categories.entity";
import { OrderDetail } from "../../order-details/entities/order-details.entity"; 

@Entity({
    name:"products"
})
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column({length: 50})
    name: string

    @Column({type:"text"})
    description: string

    @Column({type:"decimal", precision: 10, scale: 2})
    price: number

    @Column()
    stock: number

    @Column({
        default:
            "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
    })
    imgUrl: string

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    @ManyToMany(() => OrderDetail, (orderDetail) => orderDetail.products)
    @JoinTable()
    orderDetails: OrderDetail[];
}