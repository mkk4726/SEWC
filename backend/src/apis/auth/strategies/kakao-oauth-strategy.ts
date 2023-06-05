import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-jwt';
// import { Profile, Strategy } from 'passport-google-oauth20';
import { Strategy, Profile } from 'passport-kakao';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.OAUTH_KAKAO_ID,
      clientSecret: process.env.OAUTH_KAKAO_SECRET,
      callbackURL: process.env.OAUTH_KAKAO_REDIRECT,
      // 가져올 정보
      scope: ['account_email', 'profile_nickname'],
    });
  }

  validate(
    accessToken: string, //
    refreshToken: string,
    profile: Profile,
  ) {
    // console.log(profile);
    // req.user = {}
    return {
      name: profile.displayName,
      email: profile.email,
      password: '0000',
      age: 0,
      id: profile.id,
    };
  }
}
