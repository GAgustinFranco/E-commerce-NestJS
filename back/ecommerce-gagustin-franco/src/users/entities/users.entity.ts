import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { v4 as uuid} from "uuid";
import {Order} from "../../orders/entities/orders.entity";
import { File } from "../../files/entities/file.entity";
import {Exclude} from "class-transformer";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column({length: 50})
    name: string

    @Column({length:50, unique: true})
    email: string

    @Column({length: 20})
    password: string

    @Column({type:"bigint", nullable: true})
    phone: string

    @Column({length: 50, nullable: true})
    country: string

    @Column({type: "text", nullable: true})
    address: string

    @Column({length: 50, nullable: true})
    city: string

    @Exclude()
    @Column({default: false})
    isAdmin: boolean;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]

    @OneToMany(() => File, (files) => files.user)
    files: File[];
}