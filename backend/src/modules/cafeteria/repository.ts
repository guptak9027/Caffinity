import { PrismaClient } from "@prisma/client";
import { ICafeteriaRepository } from "./interface";

export class CafeteriaRepository implements ICafeteriaRepository {

    constructor(
        private prisma: PrismaClient
    ) {}

    async findAll() {
        return this.prisma.cafeteria.findMany({
            orderBy: {
                name: "asc"
            }
        });
    }

    async findById(id: string) {
        return this.prisma.cafeteria.findUnique({
            where: {id},
        include: {seats: true}
        });
    }
}