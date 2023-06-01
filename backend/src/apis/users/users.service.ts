import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IUsersServiceCreate,
  IUsersServiceFindOneByEmail,
} from './interfaces/users-service.interface';
import * as bycrpt from 'bcrypt';
import { checkEmail } from 'src/commons/functions/checkInput';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, //
  ) {}

  find(): string {
    return 'UserID ( tech dept)';
  }

  findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User> {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  async create({ createUserInput }: IUsersServiceCreate): Promise<User> {
    // 중복 이메일 검증
    const user = await this.findOneByEmail({ email: createUserInput.email });
    if (user) {
      throw new HttpException('이미등록된 이메일입니다.', HttpStatus.CONFLICT);
    }

    // 이메일 형식 검증 ( ~~@~~.co.kr or ~~@~~.com)
    if (!checkEmail(createUserInput.email)) {
      throw new HttpException(
        '이메일 형식을 확인해주세요',
        HttpStatus.BAD_REQUEST,
      );
    }

    // 비밀번호 암호화, hashing ,
    // hash 횟수 env 파일로 빼기
    const hashedPassword = await bycrpt.hash(createUserInput.password, 10);

    const result = this.usersRepository.save({
      ...createUserInput,
      password: hashedPassword,
    });
    return result;
    // return `created user, ${Object.values(createUserInput)}  ( tech dept ) `;
  }
}
