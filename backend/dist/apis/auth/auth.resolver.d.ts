import { AuthService } from './auth.service';
import { LoginInput } from './dto/auth-resolver.dto';
import { IContext } from 'src/commons/interfaces/context';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginInput: LoginInput, context: IContext): Promise<string>;
    restoreAccessToken(Context: IContext): string;
}
