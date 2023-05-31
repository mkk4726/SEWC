import { Injectable } from '@nestjs/common';
import {
  IEssayServiceCreateEssay,
  IEssaysServiceFetchEssay,
} from './interfaces/essays-service.interfaces';
import { Repository } from 'typeorm';
import { Essay } from './entities/essay.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EssaysService {
  constructor(
    @InjectRepository(Essay)
    private readonly essayRepository: Repository<Essay>, //
  ) {}

  fetchEssay({ id }: IEssaysServiceFetchEssay): string {
    return `input: ${id} , TechDept`;
  }

  async createEssay({
    createEssayInput,
  }: IEssayServiceCreateEssay): Promise<Essay> {
    const result = await this.essayRepository.save({
      ...createEssayInput,
    });
    return result;
  }
}
