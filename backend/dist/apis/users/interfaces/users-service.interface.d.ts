import { CreateUserInput } from '../dto/users-resolver.dto';
export interface IUsersServiceCreate {
    createUserInput: CreateUserInput;
}
export interface IUsersServiceFindOneByEmail {
    email: string;
}
