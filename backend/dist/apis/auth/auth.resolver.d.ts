import { AuthService } from './auth.service';
import { LoginInput } from './dto/auth-resolver.dto';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginInput: LoginInput): Promise<string>;
}
