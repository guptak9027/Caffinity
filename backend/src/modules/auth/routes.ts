import { Router } from "express";
import { authController } from "../../config/container";
import { registerSchema } from "./validation";
import { validate } from "../../middleware/validate";
const router = Router();

router.post("/register",validate(registerSchema),authController.register.bind(authController)
);

export default router;