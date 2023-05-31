import { Injectable } from '@nestjs/common';

@Injectable()
export class EssaysService {
  fetchEssay(): string {
    return 'TechDept';
  }
}
