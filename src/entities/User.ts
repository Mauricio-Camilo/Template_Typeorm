import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn()
    id: number

     @Column({type: 'text'})
    name: string

    @Column({
        type: "text",
        unique: true
    })
    cpf: string

    @Column({type: 'text'})
    email: string
}