import { User } from 'src/apis/users/entities/user.entity';
import { LoginInput } from '../dto/auth-resolver.dto';
import { IAuthUser, IContext } from 'src/commons/interfaces/context';
import { Request, Response } from 'express';

export interface IAuthServiceLogin {
  loginInput: LoginInput;
  context: IContext;
}

export interface IAuthServiceGetAccessToken {
  user: User | IAuthUser['user'];
}

export interface IAuthServiceSetRefreshToken {
  user: User;
  // context: IContext;
  res: Response;
}

export interface IAuthServiceRestoreAccessToken {
  user: IAuthUser['user'];
}
