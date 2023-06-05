import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-jwt';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.OAUTH_GOOGLE_ID,
      clientSecret: process.env.OAUTH_GOOGLE_SECRET,
      callbackURL: process.env.OAUTH_GOOGLE_REDIRECT,
      // 가져올 정보
      scope: ['email', 'profile'],
    });
  }

  validate(
    accessToken: string, //
    refreshToken: string,
    profile: Profile,
  ) {
    const { id, name, emails, photos } = profile;

    // req.user = {}
    return {
      name: profile.displayName,
      email: emails[0].value,
      // firstName: name.givenName,
      // lastName: name.familyName,
      picture: photos[0].value,
      // accessToken,
      password: '0000',
      age: 0,
    };
  }
}
