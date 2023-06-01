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

  async findAll(): Promise<Essay[]> {
    const result = await this.essayRepository.find({
      relations: ['user'], // 같이 조인해서 조회하도록
      // take: 10, // limit
    });
    console.log(result);

    return result;
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
