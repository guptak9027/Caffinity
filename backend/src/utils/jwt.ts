import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";

export interface JwtPayload {
    id: string;
    role: Role;
}

export class JwtUtil {

    private static readonly secret = process.env.JWT_SECRET as string;

    private static readonly expiresIn = "1d";

    static generateToken(payload: JwtPayload): string {

        return jwt.sign(
            payload,
            this.secret,
            {
                expiresIn: this.expiresIn
            }
        );
    }

    static verifyToken(token: string): JwtPayload {

        try {

            const decoded = jwt.verify(
                token,
                this.secret
            );

            if (typeof decoded === "string") {
                throw new Error("Invalid token payload");
            }

            if (!decoded.id || !decoded.role) {
                throw new Error("Invalid token payload");
            }

            return {
                id: decoded.id as string,
                role: decoded.role as Role
            };

        } catch (error) {

            throw new Error("Invalid or expired token");
        }
    }
}