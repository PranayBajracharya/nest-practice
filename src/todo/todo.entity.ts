import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TODO_STATUS } from './todo.schema';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column()
  status: TODO_STATUS;
}
