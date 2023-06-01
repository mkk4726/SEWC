import { User } from 'src/apis/users/entities/user.entity';
import { LoginInput } from '../dto/auth-resolver.dto';

export interface IAuthServiceLogin {
  loginInput: LoginInput;
}

export interface IAuthServiceGetAccessToken {
  user: User;
}
