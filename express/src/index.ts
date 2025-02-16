import express from "express";
import "dotenv/config";
import "reflect-metadata";
import { router } from "./routes";
import { ZodSchema } from "zod";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  // eslint-disable-next-line
  //@ts-ignore
  req.validate = function <T extends object>(schema: ZodSchema) {
    try {
      const data = schema.parse(req.body);

      return { data: data as T, errors: null };
    } catch (error: any) {
      return { data: null, errors: error.errors };
    }
  };

  next();
});

app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
