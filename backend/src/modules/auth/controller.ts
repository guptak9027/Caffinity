import { Request, Response } from "express";
import { IAuthService } from "./interface";

export class AuthController {
    constructor(
        private authService: IAuthService
    ) {}
    async register(req: Request, res: Response) {
        try {
            const result = await this.authService.register(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({
                message:
                    error instanceof Error? error.message : "Something went wrong"
            });

        }
    }

    async login(req: Request, res: Response) {
        try {
            const result = await this.authService.login(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({
                message:
                    error instanceof Error ? error.message: "Something went wrong"
            });

        }
    }
}