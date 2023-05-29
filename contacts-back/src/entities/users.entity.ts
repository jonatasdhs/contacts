import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { getRounds, hashSync } from 'bcryptjs'
import { Contact } from "./contacts.entity";

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 128})
    name: string

    @Column({unique: true, length: 128})
    email: string

    @Column({length: 128})
    password: string

    @Column()
    phone: number

    @CreateDateColumn({type: "date"})
    createdAt: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted) {
            this.password = hashSync(this.password, 10)
        }
    }

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[]
}