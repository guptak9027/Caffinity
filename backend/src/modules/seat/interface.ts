import { SeatStatus, SeatZone } from "@prisma/client";
import { SeatResponse } from "./types";

export interface ISeatRepository {

    findByCafeteria(
        cafeteriaId: string,
        filters: {
            status?: SeatStatus;
            zone?: SeatZone;
        }
    ): Promise<SeatResponse[]>;
}