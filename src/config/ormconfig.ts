import {RiddleEntity} from "../db/entity/riddle.entity";
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";
import {DataSource} from "typeorm";

export const connectionSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
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


connectionSource.initialize().then(()=>
    console.log("data source has been initialized!")
).catch((err) => {
    console.error("Error during Data Source initialization", err)
})
 connectionSource.getRepository(RiddleEntity)
  connectionSource.getRepository(RiddlePeriodEntity)