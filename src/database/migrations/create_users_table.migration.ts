import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1625617538319 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // create new table in the database.
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'username',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // drop table from the database
        await queryRunner.dropTable('users');
    }
}