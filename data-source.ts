import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'msql_todo',
  port: 3306,
  database: 'todo',
  username: 'todo',
  password: 'todo',
  synchronize: false,
  logging: true,
  migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
  migrationsRun: false,
});
