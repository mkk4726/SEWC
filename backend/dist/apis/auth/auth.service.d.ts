import { UsersService } from '../users/users.service';
import { IAuthServiceGetAccessToken, IAuthServiceLogin } from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt/dist';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    getAccessToken({ user }: IAuthServiceGetAccessToken): string;
    login({ loginInput }: IAuthServiceLogin): Promise<string>;
}
