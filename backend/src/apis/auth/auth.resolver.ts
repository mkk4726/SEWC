import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/auth-resolver.dto';
import { IContext } from 'src/commons/interfaces/context';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Mutation(() => String)
  login(
    @Args('loginInput')
    loginInput: LoginInput, //
    @Context() context: IContext,
  ): Promise<string> {
    return this.authService.login({ loginInput, context });
  }
}
