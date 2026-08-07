// other than server.ts this is required to keep middleware in this 
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blu-Reserve Backend is running 🚀");
});

export default app;