import { configDotenv } from "dotenv";
import express from "express";
import cloths from "./routes/cloths";

configDotenv();

const app = express();

app.get("/", (req, res) => {
    res.send('Clothing api, please call /api/v1/cloths')
});

app.use("/api/v1/cloths", cloths);

export default app;
