import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
require('dotenv').config()
const dbconfig: MysqlConnectionOptions = {
    name: 'default',
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}
export default dbconfig;