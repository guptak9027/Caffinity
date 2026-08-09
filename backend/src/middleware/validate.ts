import { Request, Response, NextFunction } from "express";
import { z } from "zod";

//takes a zod schema
export const validate = (schema: z.ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // parses the incoming input across zod schema
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                message: "Validation failed",
                errors: result.error.issues
            });

        }
        req.body = result.data;
        next();
    };
};