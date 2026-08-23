import { Request, Response, NextFunction } from "express";
import { JwtUtil } from "../utils/jwt";
import { Role } from "@prisma/client";

export interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        role: Role;
    };
}

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Authentication required"
        });
    }

    const [scheme, token] = authHeader.split(" ");

    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({
            message: "Invalid authorization format"
        });
    }

    try {

        const payload = JwtUtil.verifyToken(token);

        req.user = {
            id: payload.id,
            role: payload.role
        };

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};