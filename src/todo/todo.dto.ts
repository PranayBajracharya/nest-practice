import { TODO_STATUS } from './todo.schema';

export class CreateTodoDto {
  title: string;
  status: TODO_STATUS;
}
