import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'msql_todo',
      port: 3306,
      database: 'todo',
      username: 'todo',
      password: 'todo',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
