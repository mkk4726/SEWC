import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateUserInput } from './interfaces/users-service.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, //
  ) {}

  find(): string {
    return 'UserID ( tech dept)';
  }

  create({ createUserInput }: ICreateUserInput): Promise<User> {
    const result = this.usersRepository.save({
      ...createUserInput,
    });
    return result;
    // return `created user, ${Object.values(createUserInput)}  ( tech dept ) `;
  }
}
