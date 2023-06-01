import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ICreateUserInput } from './interfaces/users-service.interface';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    find(): string;
    create({ createUserInput }: ICreateUserInput): Promise<User>;
}
