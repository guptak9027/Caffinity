import { SeatStatus, SeatZone } from "@prisma/client";
import { ISeatRepository } from "./interface";
import { GetSeatsQuery, SeatResponse } from "./types";

export interface ISeatService {

    getSeats(
        cafeteriaId: string,
        filters: GetSeatsQuery
    ): Promise<SeatResponse[]>;
}

export class SeatService implements ISeatService {

    constructor(
        private seatRepository: ISeatRepository
    ) {}

    async getSeats(
        cafeteriaId: string,
        filters: GetSeatsQuery
    ): Promise<SeatResponse[]> {

        const seats =
            await this.seatRepository.findByCafeteria(
                cafeteriaId,
                filters
            );

        return seats.map((seat) => ({
            id: seat.id,
            seatNumber: seat.seatNumber,
            zone: seat.zone,
            status: seat.status,
            isWindowSeat: seat.isWindowSeat
        }));
    }
}