import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.modules';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google-oauth-strategy';
import { NaverStrategy } from './strategies/naver-oauth-strategy';
import { KakaoStrategy } from './strategies/kakao-oauth-strategy';

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule, //
  ],
  controllers: [
    AuthController, //
  ],
  providers: [
    AuthResolver,
    AuthService, //
    JwtAccessStrategy, // 상속받는 PassportStrategy 클래스의 특성상 한 곳에서 의존성 주입하면 다 쓸 수 있다.
    JwtRefreshStrategy, // loginAPI뿐 아니라, 다른 API에서도 사용할 수 있으니까.
    GoogleStrategy,
    NaverStrategy,
    KakaoStrategy,
  ],
})
export class AuthModule {}
