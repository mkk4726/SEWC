import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { UsersService } from '../users/users.service';

interface IOAuthUser {
  user: {
    name: string;
    email: string;
    picture: string;
    age: number;
    password: string;
  };
}

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('google')) // 구글 로그인 인증
  @Get('/login/google') // end point
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    const { picture, ...reqUserInput } = req.user;

    // 1. 회원조회
    let user = await this.usersService.findOneByEmail({
      email: req.user.email,
    });

    // 2. 회원가입이 안돼있다면? 자동회원가입
    if (!user)
      user = await this.usersService.create({
        createUserInput: reqUserInput,
      });

    // 3. 회원가입이 돼있다면 ( 무조건 되어있음 ) , 로그인 (refreshToken 브라우저에 전송)하기
    this.authService.setRefreshToken({ user, res });
    res.redirect('http://localhost:5500/frontend'); // 로그인 후에 돌아갈 페이지
  }
}
