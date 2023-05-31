import { IEssayServiceCreateEssay, IEssaysServiceFetchEssay } from './interfaces/essays-service.interfaces';
import { Repository } from 'typeorm';
import { Essay } from './entities/essay.entity';
export declare class EssaysService {
    private readonly essayRepository;
    constructor(essayRepository: Repository<Essay>);
    fetchEssay({ id }: IEssaysServiceFetchEssay): string;
    createEssay({ createEssayInput, }: IEssayServiceCreateEssay): Promise<Essay>;
}
