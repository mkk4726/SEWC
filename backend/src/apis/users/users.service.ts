import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  fetchUser(): string {
    return 'UserID ( tech dept)';
  }
}
