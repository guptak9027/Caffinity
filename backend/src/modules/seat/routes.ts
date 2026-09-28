import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { seatController } from "../../config/container";

const router = Router();

router.get("/cafeteria/:cafeteriaId/seats",authenticate,seatController.getSeats.bind(seatController)
);

export default router;