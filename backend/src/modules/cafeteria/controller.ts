import { Request, Response } from "express";
import { ICafeteriaService } from "./service";

export class CafeteriaController {

    constructor(
        private cafeteriaService: ICafeteriaService
    ) {}

    async getAll(req: Request, res: Response) {

        try {
            const cafeterias =await this.cafeteriaService.getAll();
            return res.status(200).json({
                cafeterias
            });
        } catch (error) {
            return res.status(500).json({
                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong"
            });
        }
    }
    async getById(req: Request, res: Response) {
        try {
            const cafeteria =await this.cafeteriaService.getById(req.params.id as string);
            return res.status(200).json({ cafeteria});
        } catch (error) {

            if (
                error instanceof Error &&
                error.message === "Cafeteria not found"
            ) {
                return res.status(404).json({
                    message: error.message
                });
            }

            return res.status(500).json({
                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong"
            });
        }
    }
}