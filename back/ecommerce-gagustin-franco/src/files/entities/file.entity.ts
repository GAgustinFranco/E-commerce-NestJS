import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/users.entity";

@Entity({ name: "files" })
export class File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fileName: string;

    @Column()
    mimeType: string;

    @Column()
    url: string;

    @ManyToOne(() => User, (user) => user.files)
    @JoinColumn({ name: "user_id" })
    user: User;
}
