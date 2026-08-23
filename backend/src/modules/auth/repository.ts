import prisma from "../../config/prisma";
import {IUserRepository} from "./interface";
import {RegisterDTO} from "./types";

export class UserRepository implements IUserRepository {
    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                role: true
            }
        });
    }

    async create(data: RegisterDTO) {
        return prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });
    }

    async findById(id: string) {
        return prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });
    }
}