import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity('contacts')
export class Contact {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 128})
    name: string

    @Column({length: 128})
    email: string

    @Column()
    phone: number

    @ManyToOne(() => User, user => user.contacts)
    user: User
}