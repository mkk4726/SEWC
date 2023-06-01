import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/auth-resolver.dto';
import { IContext } from 'src/commons/interfaces/context';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guards';

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

  // 아무나 다시 받아가면 안된다. -> Guard 설정
  @UseGuards(GqlAuthGuard('refresh'))
  @Mutation(() => String)
  restoreAccessToken(
    @Context() Context: IContext, //
  ): string {
    return this.authService.restoreAccessToken({ user: Context.req.user });
  }
}
