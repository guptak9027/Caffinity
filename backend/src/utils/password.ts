import bcrypt from "bcrypt";

export class PasswordUtil {
    static async hash(password: string) {
        return bcrypt.hash(password, 10);
    }
    static async compare(password: string, hash: string) {
        return bcrypt.compare(password, hash);
    }

}