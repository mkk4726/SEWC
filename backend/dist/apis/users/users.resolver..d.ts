import { UsersService } from './users.service';
import { CreateUserInput } from './dto/users-resolver.dto';
import { User } from './entities/user.entity';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    fetchUser(): string;
    createUser(createUserInput: CreateUserInput): Promise<User>;
}
