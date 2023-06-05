import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { IOAuthUser } from './interfaces/auth-controller.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginGoogle(req: Request & IOAuthUser, res: Response): Promise<void>;
    loginNaver(req: Request & IOAuthUser, res: Response): Promise<void>;
    loginKakao(req: Request & IOAuthUser, res: Response): Promise<void>;
}
