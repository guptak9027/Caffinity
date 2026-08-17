import { Router } from "express";
import { authController } from "../../config/container";
import { registerSchema ,loginSchema} from "./validation";
import { validate } from "../../middleware/validate";
const router = Router();

router.post("/register",validate(registerSchema),authController.register.bind(authController));
router.post("/login",validate(loginSchema),authController.login.bind(authController));

export default router;