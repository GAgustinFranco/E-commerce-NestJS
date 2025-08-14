import { Column, Entity,PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import {v4 as uuid} from "uuid";
import {User} from "../../users/entities/users.entity";
import {OrderDetail} from "../../order-details/entities/order-details.entity";

@Entity({
    name: "orders"
})
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @ManyToOne(() => User, (user => user.orders))
    user: User; 

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    date: Date;

    @OneToMany(() => OrderDetail, (detail) => detail.order, {
        cascade:true
    })
    details: OrderDetail[];
}
