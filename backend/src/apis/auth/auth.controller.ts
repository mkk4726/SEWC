import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { IOAuthUser } from './interfaces/auth-controller.interface';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  // Google OAuth
  @UseGuards(AuthGuard('google')) // 구글 로그인 인증
  @Get('/login/google') // end point
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    const user = await this.authService.OAuthLogin({ req, social: 'google' });

    // 3. 회원가입이 돼있다면 ( 무조건 되어있음 ) , 로그인 (refreshToken 브라우저에 전송)하기
    this.authService.setRefreshToken({ user, res });
    res.redirect('http://localhost:5500/frontend/src/pages/social-login.html'); // 로그인 후에 돌아갈 페이지
  }

  // Naver OAuth
  @UseGuards(AuthGuard('naver'))
  @Get('/login/naver')
  async loginNaver(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    const user = await this.authService.OAuthLogin({ req, social: 'naver' });

    // 3. 회원가입이 돼있다면 ( 무조건 되어있음 ) , 로그인 (refreshToken 브라우저에 전송)하기
    this.authService.setRefreshToken({ user, res });
    res.redirect('http://localhost:5500/frontend/src/pages/social-login.html'); // 로그인 후에 돌아갈 페이지
  }

  // KaKao OAuth
  @UseGuards(AuthGuard('kakao'))
  @Get('/login/kakao')
  async loginKakao(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    const user = await this.authService.OAuthLogin({ req, social: 'kakao' });

    // 3. 회원가입이 돼있다면 ( 무조건 되어있음 ) , 로그인 (refreshToken 브라우저에 전송)하기
    this.authService.setRefreshToken({ user, res });
    res.redirect('http://localhost:5500/frontend/src/pages/social-login.html'); // 로그인 후에 돌아갈 페이지
  }
}
