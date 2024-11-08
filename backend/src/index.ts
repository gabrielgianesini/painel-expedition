import express, { Request, Response } from "express";
import cors from "cors";
import { resultQuery } from "./repository/mock/query";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.CONFIG_CORS_ORIGIN!],
    credentials: true,
    allowedHeaders: ["Access-Control-Request-Headers", "content-type"],
  })
);

/* const painelExpeditionController = new PainelExpeditionController(); */

app.post("/search", (req: Request, res: Response): any => {
  /* painelExpeditionController.getExpedition(req, res); */
  return res.status(200).json(resultQuery);
});

app.listen(port, () => console.log("server is running in port " + port));
