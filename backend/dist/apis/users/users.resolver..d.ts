import { UsersService } from './users.service';
import { CreateUserInput } from './dto/users-resolver.dto';
import { User } from './entities/user.entity';
import { IContext } from './interfaces/users-resolver.interface';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    fetchUser(context: IContext): string;
    createUser(createUserInput: CreateUserInput): Promise<User>;
}
