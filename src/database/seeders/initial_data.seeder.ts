import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';

export default class InitialDataSeeder implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { username: 'user1', email: 'user1@example.com', password: "password1" },
                { username: 'user2', email: 'user2@example.com', password: "password2" },

            ])
            .execute();
    }
}