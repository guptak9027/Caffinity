import { SeatStatus, SeatZone } from "@prisma/client";

export interface SeatResponse {
    id: string;
    seatNumber: string;
    zone: SeatZone;
    status: SeatStatus;
    isWindowSeat: boolean;
}

export interface GetSeatsQuery {
    status?: SeatStatus;
    zone?: SeatZone;
}