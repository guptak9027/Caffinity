import { SeatZone, SeatStatus } from "@prisma/client";

export interface SeatResponse {
    id: string;
    seatNumber: string;
    zone: SeatZone;
    status: SeatStatus;
    isWindowSeat: boolean;
}

export interface CafeteriaResponse {
    id: string;
    name: string;
    building: string;
    floor: number;
    capacity: number;
}

export interface CafeteriaWithSeatsResponse
    extends CafeteriaResponse {
    seats: SeatResponse[];
}