import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { IAuthServiceLogin } from './interfaces/auth-service.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService, //
  ) {}

  async login({ loginInput }: IAuthServiceLogin): Promise<string> {
    const user = await this.userService.findOneByEmail({
      email: loginInput.email,
    });

    // 유저 조회된게 있는지 확인
    if (!user)
      throw new HttpException(
        '등록된 이메일이 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    // 비밀번호 검증
    const isAuth = bcrypt.compare(loginInput.password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    return 'accessToken ( tech dept )';
  }
}
