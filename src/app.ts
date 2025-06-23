import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import clothes from './routes/clothes'
import auth from "./routes/auth";
import errorHandlerMiddleware from "./middlewares/errorHandler";
import routeNotFound from "./middlewares/routeNotFound";
import authenticationMiddleware from "./middlewares/authentication";
import helmet from "helmet";
import { apiLimiter, authLimiter } from "./middlewares/rateLimiter";

configDotenv();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet())

// routes
app.get("/", (req: any, res: any) => res.send("cloth api, go to /api/v1/clothes"));
app.use("/api/v1/auth", authLimiter, auth);
app.use("/api/v1/clothes", authenticationMiddleware,apiLimiter, clothes);

// errors middlewares
app.use(errorHandlerMiddleware);
app.use(routeNotFound);

export default app;
