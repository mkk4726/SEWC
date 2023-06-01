import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/auth-resolver.dto';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Mutation(() => String)
  login(
    @Args('loginInput')
    loginInput: LoginInput, //
  ): Promise<string> {
    return this.authService.login({ loginInput });
  }
}
