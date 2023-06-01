import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/users-resolver.dto';
import { User } from './entities/user.entity';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  // 유저조회
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
