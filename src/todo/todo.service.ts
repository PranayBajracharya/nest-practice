import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';
import { TODO_STATUS } from './todo.schema';

export enum Status {
  'ACTIVE' = 1,
  'INACTIVE' = 0,
}

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  private todoList: Todo[] = [];
  private index = 0;

  getAllTodos() {
    return this.todoRepository.find();
  }

  async getTodoById(id: number) {
    const res = await this.todoRepository.findOneBy({ id });
    console.log(res);

    return;
  }

  createTodo(createTodoDto) {
    const { title } = createTodoDto;

    const todo: Partial<Todo> = {
      id: this.index++,
      title,
      status: TODO_STATUS.ACTIVE,
    };

    return this.todoRepository.save(todo);
  }

  updateStatus(id, status) {
    return this, this.todoRepository.update(id, { status: status });
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
