
// Service doesnot know prisma
import { IAuthService, IUserRepository } from "./interface";
import {RegisterDTO,LoginDTO,AuthResponse} from "./types";
import { PasswordUtil } from "../../utils/password";
import { JwtUtil } from "../../utils/jwt";

// here the main business logic
export class AuthService implements IAuthService {
    constructor(
        private userRepository: IUserRepository
    ) {}
    async register(data: RegisterDTO) {
        const existingUser = await this.userRepository.findByEmail(data.email);
        if(existingUser){
            throw new Error("Email already registered");

        }
        const hashedPassword = await PasswordUtil.hash(data.password);
        const user = await this.userRepository.create({
            ...data,
            password: hashedPassword
        });
        const token = JwtUtil.generateToken({
            id: user.id,
            role: user.role
        });
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
    },
            token
        };

    }
    async login(data: LoginDTO){
        const user = await this.userRepository.findByEmail(data.email);
        //security practice don't say:"Email doesn't exist" because that can allow attackers to discover which email addresses have accounts.
        if (!user) {
        throw new Error("Invalid email or password");
        }
        const isPasswordValid =
            await PasswordUtil.compare( data.password,user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
        const token =
            JwtUtil.generateToken({
                id: user.id,
                role: user.role
            });
        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
    }
            ,token};
    }

    async getCurrentUser(userId: string) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}

