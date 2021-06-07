import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";

import "express-async-errors";
import { usersRoutes } from "./routes/users.routes";
import swaggerFile from "./swagger.json";
import { CustomError } from "./utils/CustomError";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/users", usersRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
      return response.status(err.status).json({
        message: err.message,
        error: err.status,
      });
    }
    return response.status(500).json({
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
