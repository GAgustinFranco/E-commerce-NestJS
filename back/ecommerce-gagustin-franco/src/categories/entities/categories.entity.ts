import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { v4 as uuid} from "uuid";
import { Product } from "../../products/entities/products.entity";

@Entity({
    name:"categories"
})
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column({length:50})
    name: string

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
