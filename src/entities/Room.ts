import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rooms')
export default class Room {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text'})
    title: string
}