import { Request, Response } from "express";
import { ISeatService } from "./service";
import { SeatStatus, SeatZone } from "@prisma/client";

export class SeatController {

    constructor(
        private seatService: ISeatService
    ) {}

    async getSeats(
        req: Request,
        res: Response
    ) {

        try {

            const cafeteriaId =
                req.params.cafeteriaId as string;

            const status =
                req.query.status as SeatStatus | undefined;

            const zone =
                req.query.zone as SeatZone | undefined;

            const seats =
                await this.seatService.getSeats(
                    cafeteriaId,
                    {
                        status,
                        zone
                    }
                );

            return res.status(200).json({
                seats
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
}