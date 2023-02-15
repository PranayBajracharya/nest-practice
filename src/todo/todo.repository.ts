import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';
import { TODO_STATUS } from './todo.schema';

@Injectable()
export class TodoRepository extends Repository<Todo> {
  async createTodo(createTodoDto: CreateTodoDto) {
    const { title } = createTodoDto;

    const todo = new Todo();
    todo.title = title;
    todo.status = TODO_STATUS.ACTIVE;
    await todo.save();

    return todo;
  }
}
