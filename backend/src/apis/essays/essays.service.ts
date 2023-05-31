import { Injectable } from '@nestjs/common';
import {
  IEssayServiceCreateEssay,
  IEssaysServiceFetchEssay,
} from './interfaces/essays-service.interfaces';

@Injectable()
export class EssaysService {
  fetchEssay({ id }: IEssaysServiceFetchEssay): string {
    return `input: ${id} , TechDept`;
  }

  createEssay({ createEssayInput }: IEssayServiceCreateEssay): string {
    return `input: ${createEssayInput.input_text} , create Essay , TechDept`;
  }
}
