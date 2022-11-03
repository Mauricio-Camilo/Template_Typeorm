import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sellers')
export default class Seller {
    @PrimaryGeneratedColumn()
    customer_id: number

    @Column({
        type: "varchar",
        length: 255,
        unique: true
    })
    company_cnpj: string

    @Column({type: 'text'})
    company_site: string
}