import { IEssayServiceCreateEssay, IEssaysServiceFetchEssay } from './interfaces/essays-service.interfaces';
import { Repository } from 'typeorm';
import { Essay } from './entities/essay.entity';
export declare class EssaysService {
    private readonly essayRepository;
    constructor(essayRepository: Repository<Essay>);
    findOne({ id }: IEssaysServiceFetchEssay): Promise<Essay>;
    create({ createEssayInput }: IEssayServiceCreateEssay): Promise<Essay>;
}
