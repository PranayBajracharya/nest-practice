import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createTodoTable1676637333136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'todo',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isNullable: false,
                  isUnique: true,
                },
                {
                  name: 'title',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'status',
                  type: 'boolean',
                }
              ],
            }),
            true,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('todo');
    }

}
