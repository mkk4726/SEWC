import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { UsersService } from '../users/users.service';
interface IOAuthUser {
    user: {
        name: string;
        email: string;
        picture: string;
        age: number;
        password: string;
    };
}
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    loginGoogle(req: Request & IOAuthUser, res: Response): Promise<void>;
}
export {};
