import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoDto } from './todo.dto';
import { TodoService, Status } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(Number(id));
  }

  @Post()
  postTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Patch('/:id')
  updateTodo(@Param('id') id: string, @Body('status') status: 0 | 1) {
    const newStatus = status === 1 ? Status.ACTIVE : Status.INACTIVE;
    return this.todoService.updateStatus(Number(id), newStatus);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): void {
    return this.todoService.deleteTodo(Number(id));
  }
}
