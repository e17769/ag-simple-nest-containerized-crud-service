import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class link{
    @PrimaryGeneratedColumn({
        type:'bigint',
        name:'id'
    })
    id: number;


    @Column({
        nullable:false,
        default:0
    })
    sort: number;

    @Column({
        nullable: true,
        default:''
    })
    name: string;

    @Column({
        nullable:true,
        default:''
    })
    url: string

}