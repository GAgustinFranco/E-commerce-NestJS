import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { v4 as uuid} from "uuid";
import {Order} from "../../orders/entities/orders.entity";
import { File } from "../../files/entities/file.entity";
import {Exclude, Expose} from "class-transformer";

@Entity({
    name: "users"
})
export class User {

    @Expose()
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Expose()
    @Column({length: 50})
    name: string

    @Expose()
    @Column({length:50, unique: true})
    email: string

    @Expose()
    @Column({length: 100})
    password: string

    @Expose()
    @Column({type:"bigint", nullable: true})
    phone: string

    @Expose()
    @Column({length: 50, nullable: true})
    country: string

    @Expose()
    @Column({type: "text", nullable: true})
    address: string

    @Expose()
    @Column({length: 50, nullable: true})
    city: string

    @Exclude()
    @Column({default: false})
    isAdmin: boolean;

    @Expose()
    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]

    @Expose()
    @OneToMany(() => File, (files) => files.user)
    files: File[];
}