import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { cafeteriaController } from "../../config/container";

const router = Router();
router.get("/",authenticate,cafeteriaController.getAll.bind(cafeteriaController));
router.get("/:id",authenticate,cafeteriaController.getById.bind(cafeteriaController));
export default router;