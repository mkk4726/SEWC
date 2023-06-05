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
  IAuthServiceOAuthLogin,
  IAuthServiceRestoreAccessToken,
  IAuthServiceSetRefreshToken,
} from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService, //
    private readonly jwtService: JwtService, //
  ) {}

  async login({ loginInput, context }: IAuthServiceLogin): Promise<string> {
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

    // 4. refreshToken(=JWT)을 만들어서 브라우저 쿠키에 저장해서 보내주기
    this.setRefreshToken({ user, res: context.res });

    //4. 일치하는 유저 존재 && 비밀번호 일치 -> return JWT token
    return this.getAccessToken({ user });
    // return 'accessToken ( tech dept )';
  }

  // get JWT token
  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      // { sub: user.id, email: user.email }, // json data
      { sub: user.id },
      // 유저정보가 담긴 payload
      { secret: 'myAccessToken', expiresIn: '1h' }, // secretKey
      // 서명된 JWT를 생성할 때 사용하는 키
      // 암호화와 복호화에서 사용되는 키
    );
  }

  // cache에 refreshToken 담기
  setRefreshToken({ user, res }: IAuthServiceSetRefreshToken): void {
    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { secret: 'myRefreshToken', expiresIn: '2w' },
    );

    // 개발환경
    res.setHeader('set-Cookie', `refreshToken=${refreshToken}; path=/;`);

    // 배포환경 , 보안을 위한 추가 셋팅 필요
    // context.res.setHeader(
    //   'set-Cookie',
    //   `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly`,
    // );
    // context.res.setHeader(
    //   'Access-Control-Allow-Origin',
    //   'https://myfrontsite.com',
    // );
  }

  restoreAccessToken({ user }: IAuthServiceRestoreAccessToken) {
    return this.getAccessToken({ user });
  }

  // ---------------------------------------------------------------------------------------------- //
  // OAUth 설정

  // OAuth Login
  async OAuthLogin({ req, social }: IAuthServiceOAuthLogin) {
    // google OAuth
    if (social === 'google') {
    }
    // naver OAuth , 이메일 조회가 안돼서 대체
    if (social === 'naver') {
      req.user.email = `${req.user.mobile}@naver.com`;
    }
    // kakao OAuth , 이메일 조회가 안돼서 대체
    if (social === 'kakao') {
      req.user.email = `${req.user.id}@kakao.com`;
    }
    // 1. 회원조회
    let user = await this.userService.findOneByEmail({
      email: req.user.email,
    });

    // 2. 회원가입이 안돼있다면? 자동회원가입 (DB에 저장)
    if (!user)
      user = await this.userService.create({
        createUserInput: req.user,
      });

    return user;
  }
}
