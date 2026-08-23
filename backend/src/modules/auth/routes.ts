import { Router } from "express";
import { authController } from "../../config/container";
import { registerSchema ,loginSchema} from "./validation";
import { validate } from "../../middleware/validate";
import { authenticate } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import { Role } from "@prisma/client";
const router = Router();

router.post("/register",validate(registerSchema),authController.register.bind(authController));
router.post("/login",validate(loginSchema),authController.login.bind(authController));
router.get( "/me", authenticate,authController.me.bind(authController));
// router.get("/admin-test",authenticate,authorize(Role.ADMIN),(req, res) => {res.status(200).json({
//             message: "You are an admin"
//         });
//     }
// );


export default router;