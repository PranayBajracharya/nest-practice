import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar"
    })
    title: string;

    @Column()
    status: boolean;
}

