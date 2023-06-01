import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.modules';

@Module({
  imports: [
    UsersModule, //
  ],
  providers: [
    AuthResolver,
    AuthService, //
  ],
})
export class AuthModule {}
