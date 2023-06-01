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

  findOne({ id }: IEssaysServiceFetchEssay): Promise<Essay> {
    return this.essayRepository.findOne({ where: { id } });
  }

  findAll(): Promise<Essay[]> {
    return this.essayRepository.find({
      // take: 10, // limit
    });
  }

  async create({ createEssayInput }: IEssayServiceCreateEssay): Promise<Essay> {
    const { userID, ...essay } = createEssayInput;

    const result = await this.essayRepository.save({
      ...essay,
      // userID 값 넣기.
      user: {
        id: userID,
      },
    });
    return result;
  }
}
