import { UsersService } from '../users/users.service';
import { IAuthServiceLogin } from './interfaces/auth-service.interface';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    login({ loginInput }: IAuthServiceLogin): Promise<string>;
}
