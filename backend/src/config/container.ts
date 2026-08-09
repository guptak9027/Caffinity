import { UserRepository } from "../modules/auth/repository";
import { AuthService } from "../modules/auth/service";
import { AuthController } from "../modules/auth/controller";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);
export {
    authController,
    authService,
    userRepository
};