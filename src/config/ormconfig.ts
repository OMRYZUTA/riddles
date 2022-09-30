import {RiddleEntity} from "../db/entity/riddle.entity";
import {RiddlePeriodEntity} from "../db/entity/riddle-period.entity";
import {DataSource} from "typeorm";

export const connectionSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'riddle',
    password: 'riddle',
    database: 'riddle',
    entities: [RiddleEntity, RiddlePeriodEntity],
    synchronize: false,
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