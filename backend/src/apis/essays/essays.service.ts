import { Injectable } from '@nestjs/common';

@Injectable()
export class EssaysService {
  read(): string {
    return 'TechDept';
  }
}
