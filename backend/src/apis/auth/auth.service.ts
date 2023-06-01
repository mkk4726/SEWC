import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService, //
    private readonly jwtService: JwtService, //
  ) {}

  // get JWT token
  getAccessToken({ user }: IAuthServiceGetAccessToken) {
    return this.jwtService.sign(
      { sub: user.id }, // json data
      // 유저정보가 담긴 payload
      { secret: 'myPassword', expiresIn: '1h' }, // secretKey
      // 서명된 JWT를 생성할 때 사용하는 키
      // 암호화와 복호화에서 사용되는 키
    );
  }

  async login({ loginInput }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일이 일치하는 유저 찾기
    const user = await this.userService.findOneByEmail({
      email: loginInput.email,
    });

    // 2. 일치하는 유저 없으면 에러 발생유저
    if (!user)
      throw new HttpException(
        '등록된 이메일이 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    // 3. 비밀번호 검증
    const isAuth = bcrypt.compare(loginInput.password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    //4. 일치하는 유저 존재 && 비밀번호 일치 -> return JWT token
    return this.getAccessToken({ user });
    // return 'accessToken ( tech dept )';
  }
}
