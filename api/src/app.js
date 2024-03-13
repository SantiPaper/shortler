import express from "express";
import urlRoutes from "./routes/url.routes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(urlRoutes);

export default app;
