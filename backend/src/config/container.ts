import { UserRepository } from "../modules/auth/repository";
import { AuthService } from "../modules/auth/service";
import { AuthController } from "../modules/auth/controller";

import { CafeteriaRepository } from "../modules/cafeteria/repository";
import { CafeteriaService } from "../modules/cafeteria/service";
import { CafeteriaController } from "../modules/cafeteria/controller";

import { SeatRepository } from "../modules/seat/repository";
import { SeatService } from "../modules/seat/service";
import { SeatController } from "../modules/seat/controller";
import prisma from "./prisma";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);


const cafeteriaRepository =new CafeteriaRepository(prisma);
const cafeteriaService =new CafeteriaService(cafeteriaRepository);
export const cafeteriaController = new CafeteriaController(cafeteriaService);

const seatRepository =new SeatRepository(prisma);
const seatService =new SeatService(seatRepository);
export const seatController =new SeatController(seatService);


export {
    authController,
    authService,
    userRepository
};