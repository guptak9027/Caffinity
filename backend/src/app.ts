// other than server.ts this is required to keep middleware in this 
import express from "express";
import authRoutes from "./modules/auth/routes";
import cafeteriaRoutes from "./modules/cafeteria/routes";
import seatRoutes from "./modules/seat/routes";
const app = express();

app.use(express.json());
app.use("/api", seatRoutes);
app.use("/api/cafeteria", cafeteriaRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Blu-Reserve Backend is running 🚀");
});

export default app;