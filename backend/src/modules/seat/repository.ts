import { PrismaClient, SeatStatus, SeatZone } from "@prisma/client";
import { ISeatRepository } from "./interface";

export class SeatRepository implements ISeatRepository {

    constructor(
        private prisma: PrismaClient
    ) {}

    async findByCafeteria(
        cafeteriaId: string,
        filters: {
            status?: SeatStatus;
            zone?: SeatZone;
        }
    ) {

        return this.prisma.seat.findMany({
            where: {
                cafeteriaId,

                ...(filters.status && {
                    status: filters.status
                }),

                ...(filters.zone && {
                    zone: filters.zone
                })
            },

            orderBy: {
                seatNumber: "asc"
            }
        });
    }
}