import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('videos')
export default class Video {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    title: string
}