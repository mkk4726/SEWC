import { User } from 'src/apis/users/entities/user.entity';
import { LoginInput } from '../dto/auth-resolver.dto';
import { IContext } from 'src/commons/interfaces/context';
export interface IAuthServiceLogin {
    loginInput: LoginInput;
    context: IContext;
}
export interface IAuthServiceGetAccessToken {
    user: User;
}
export interface IAuthServiceSetRefreshToken {
    user: User;
    context: IContext;
}
