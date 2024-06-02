import { DataSource } from "typeorm";
import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions";
import config from "../../config";
import { resolve } from "path";

const mongoConfig = config.mongo();

export const mongoOptions: MongoConnectionOptions = {
  type: "mongodb",
  host: mongoConfig.host,
  port: mongoConfig.port,
  authSource: "admin",
  username: mongoConfig.username,
  password: mongoConfig.password,
  database: mongoConfig.database,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: false,
  entities: [resolve(__dirname + "/entities/*.entity{.ts,.js}")],
};

const MongoDataSource = new DataSource(mongoOptions);

export default MongoDataSource;
