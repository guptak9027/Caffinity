import {RegisterDTO,LoginDTO,AuthResponse,AuthUser} from "./types";

//what db operation we need first we have to define there interface here
export interface IUserRepository {
    findByEmail(
        email: string
    ): Promise<AuthUser & { password: string } | null>;
    create(
        data: RegisterDTO
    ): Promise<AuthUser>;
}

export interface IAuthService {
    register(
        data: RegisterDTO
    ): Promise<AuthResponse>;
    login(
        data: LoginDTO
    ): Promise<AuthResponse>;

}