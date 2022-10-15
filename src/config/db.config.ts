import {RiddleEntity} from "../db/entity/riddle.entity";
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";

export default () => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [RiddleEntity, RiddlePeriodEntity],
    synchronize: true,
    migrationsRun: true,
    migrationsTableName: 'migrations',
    logging: false,
    name: 'default',
    migrations: ['src/db/migrations/**/*{.ts,.js}'],
    subscribers: ['src/db/subscriber/**/*{.ts,.js}'],
});