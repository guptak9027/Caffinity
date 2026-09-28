import {RegisterDTO,LoginDTO,AuthResponse,AuthUser} from "./types";

// what db operation we need first we have to define their interface here
export interface IUserRepository {
    findByEmail(
        email: string
    ): Promise<AuthUser & { password: string } | null>;
    create(
        data: RegisterDTO
    ): Promise<AuthUser>;
    findById(id: string): Promise<AuthUser | null>;
}

export interface IAuthService {
    register(data: RegisterDTO): Promise<AuthResponse>;
    login(data: LoginDTO): Promise<AuthResponse>;
    getCurrentUser(userId: string): Promise<AuthUser>;
}