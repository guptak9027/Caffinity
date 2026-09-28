import { Cafeteria, Seat } from "@prisma/client";

export interface ICafeteriaRepository {
    findAll(): Promise<Cafeteria[]>;
    findById(id: string): Promise<(Cafeteria & { seats: Seat[] }) | null>;
}