import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.modules';
import { JwtModule } from '@nestjs/jwt';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule, //
  ],
  providers: [
    AuthResolver,
    AuthService, //
    JwtAccessStrategy,
  ],
})
export class AuthModule {}
