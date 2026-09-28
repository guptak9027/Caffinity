import { Request, Response } from "express";
import { IAuthService } from "./interface";
import { AuthenticatedRequest } from "../../middleware/authenticate";

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
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({
                message:
                    error instanceof Error ? error.message: "Something went wrong"
            });

        }
    }
    
    // token verify middleware
    async me(req: AuthenticatedRequest, res: Response) {
        return res.status(200).json({
            message: "Authenticated successfully",
            user: req.user
        });
    }
}
