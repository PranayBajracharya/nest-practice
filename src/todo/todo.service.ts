import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './todo.dto';

export interface Todo {
  id: number;
  title: string;
  status: Status;
}

export enum Status {
  'ACTIVE' = 1,
  'INACTIVE' = 0,
}

@Injectable()
export class TodoService {
  private todoList: Todo[] = [];
  private index = 0;

  getAllTodos() {
    return this.todoList;
  }

  getTodoById(id: number): Todo {
    return this.todoList.find((todo) => todo.id === id);
  }

  createTodo(createTodoDto: CreateTodoDto): Todo {
    const { title } = createTodoDto;

    const todo = {
      id: this.index++,
      title,
      status: Status.ACTIVE,
    };
    this.todoList.push(todo);
    return todo;
  }

  updateStatus(id: number, status: Status): Todo {
    const selectedTodo = this.getTodoById(id);
    selectedTodo.status = status;
    return selectedTodo;
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
