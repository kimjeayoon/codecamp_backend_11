import { Request, Response } from 'express';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
interface IOAuthUser {
    user: {
        name: string;
        email: string;
        hashedPassword: string;
        age: number;
    };
}
export declare class AuthController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    loginGoogle(req: Request & IOAuthUser, res: Response): Promise<void>;
}
export {};
