import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export class JwtUtil {

    static generateToken(payload: object) {
        return jwt.sign(payload, JWT_SECRET, {
            expiresIn: "7d"
        });

    }

}