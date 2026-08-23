import { ICafeteriaRepository } from "./interface";
import { CafeteriaResponse,CafeteriaWithSeatsResponse } from "./types";

export interface ICafeteriaService {
    getAll(): Promise<CafeteriaResponse[]>;
    getById(id: string): Promise<CafeteriaWithSeatsResponse>;
}

export class CafeteriaService implements ICafeteriaService {
    constructor(
        private cafeteriaRepository: ICafeteriaRepository
    ) {}
    async getAll(): Promise<CafeteriaResponse[]> {
        const cafeterias =
            await this.cafeteriaRepository.findAll();

        return cafeterias.map((cafeteria) => ({
            id: cafeteria.id,
            name: cafeteria.name,
            building: cafeteria.building,
            floor: cafeteria.floor,
            capacity: cafeteria.capacity
        }));
    }

    async getById(id: string): Promise<CafeteriaWithSeatsResponse> {

        const cafeteria =
            await this.cafeteriaRepository.findById(id);

        if (!cafeteria) {
            throw new Error("Cafeteria not found");
        }

        return {
            id: cafeteria.id,
            name: cafeteria.name,
            building: cafeteria.building,
            floor: cafeteria.floor,
            capacity: cafeteria.capacity,

            seats: cafeteria.seats.map((seat) => ({
                id: seat.id,
                seatNumber: seat.seatNumber,
                zone: seat.zone,
                status: seat.status,
                isWindowSeat: seat.isWindowSeat
            }))
        };
    }
}