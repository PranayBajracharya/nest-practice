import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';

// export interface Todo {
//   id: number;
//   title: string;
//   status: Status;
// }

export enum Status {
  'ACTIVE' = 1,
  'INACTIVE' = 0,
}

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ) { }
  private todoList: Todo[] = [];
  private index = 0;

  getAllTodos() {
    return this.todoRepository.find();
  }

  getTodoById(id: number) {
    return this.todoRepository.findOneBy({id});
  }

  createTodo(createTodoDto) {
    const { title } = createTodoDto;

    const todo: Partial<Todo> = {
      id: this.index++,
      title,
      status: true,
    };

    return this.todoRepository.save(todo);
  }

  updateStatus(id, status) {
    return this,this.todoRepository.update(id,{status: false});
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
