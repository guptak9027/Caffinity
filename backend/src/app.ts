// other than server.ts this is required to keep middleware in this 
import express from "express";
import authRoutes from "./modules/auth/routes";
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Blu-Reserve Backend is running 🚀");
});

export default app;