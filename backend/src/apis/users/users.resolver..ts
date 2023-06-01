import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/users-resolver.dto';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from '../auth/guards/gql-auth.guards';
// import { AuthGuard } from '@nestjs/passport';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  // 유저조회
  // 로그인을 한 유저면 fetchUser API를 실행시키고 로그인을 하지 않은 유저면 실행되지 못하게 할 방어막
  // access라는 인증방식이름을 가지는 Guard를 사용. -> 제작해줘야함. ( auth/strategies )
  // @UseGuards(AuthGuard('access')) // rest-api에서 사용,
  // GQL에서는 GqlAuthAccessGuard를 먼저 실행시켜서 통과되면 AuthGuard를 실행시킨다. ( auth/guards )
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => String)
  fetchUser(): string {
    return this.usersService.find();
  }

  // 회원가입
  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput, //
  ): Promise<User> {
    return this.usersService.create({ createUserInput });
  }
}
