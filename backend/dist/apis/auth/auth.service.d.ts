import { UsersService } from '../users/users.service';
import { IAuthServiceGetAccessToken, IAuthServiceLogin, IAuthServiceRestoreAccessToken, IAuthServiceSetRefreshToken } from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt/dist';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login({ loginInput, context }: IAuthServiceLogin): Promise<string>;
    getAccessToken({ user }: IAuthServiceGetAccessToken): string;
    setRefreshToken({ user, context }: IAuthServiceSetRefreshToken): void;
    restoreAccessToken({ user }: IAuthServiceRestoreAccessToken): string;
}
