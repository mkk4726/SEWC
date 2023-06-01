import { CreateEssayInput } from './dto/essays-resolver.dto';
import { Essay } from './entities/essay.entity';
import { EssaysService } from './essays.service';
export declare class EssaysResolver {
    private readonly essaysService;
    constructor(essaysService: EssaysService);
    fetchEssay(id: number): Promise<Essay>;
    fetchEssays(): Promise<Essay[]>;
    createEssay(createEssayInput: CreateEssayInput): Promise<Essay>;
}
