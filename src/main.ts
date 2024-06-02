import "reflect-metadata";
import express from "express";

import { userRouter } from "./routes";

import { MongoConnection } from "./infra/database/mongo/connection";

async function bootstrap() {
  const mongoConnection = new MongoConnection();

  await mongoConnection
    .connect()
    .then(() => {
      console.log("MongoDB connection established!");

      const app = express();

      app.use(express.json())
      app.use("/users", userRouter);

      const port = process.env.PORT || 3000;
      app.listen(port, () => {
        console.log(`Server running on http://127.0.0.1:${port}/`);
      });
    })
    .catch((e) => {
      console.error(`Error while trying to connect to MongoDB: ${e}`);
    });
}

bootstrap();
