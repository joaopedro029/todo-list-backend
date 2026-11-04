import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/app", router);

app.listen(3333, () => {
  console.log("Servidor rodando");
});
