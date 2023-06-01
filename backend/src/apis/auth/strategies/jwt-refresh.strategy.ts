import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        // cookie가 여러개일 때 refreshToken 추출
        const cookies = req.headers.cookie.split(';');
        let cookie;
        cookies.forEach((el: string) => {
          if (el.includes('refreshToken')) cookie = el;
        });
        const refreshToken = cookie.replace('refreshToken=', '').trim();
        console.log(refreshToken);
        return refreshToken;
      },
      secretOrKey: 'myRefreshToken',
    });
  }

  validate(payload) {
    return { id: payload.sub };
  }
}
