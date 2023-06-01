import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    // header안에 cache로 함께 들어온 jwt토큰을 추출해 검증.
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest: (req) => {
      //   const tmp = req.headers.Authorization
      //   const accessToken = tmp.toLowercase().replace('bearer', '');
      //   return accessToken
      // }
      secretOrKey: 'myAccessToken',
    });
  }
  // 검증에 성공한다면 실행되는 함수
  validate(payload) {
    // console.log(payload); // { sub : user.id, email: user.email}
    return {
      id: payload.sub,
      // email: payload.email,
      // context안의 req안에 user안에 저장됨. user:{id: payload.sub, email:payload.email}
      // context는 요청 정보이기에 API 중간중간 어디서든 뽑아서 사용할 수 있다.
    };
  }
}
