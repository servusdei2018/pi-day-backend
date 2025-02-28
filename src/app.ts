import express from "express";
import submitRoute from "./routes/submitRoute";
import scoresRoute from "./routes/scoresRoute";

const app = express();
app.use(express.json());

app.use("/", submitRoute);
app.use("/", scoresRoute);

export default app;
