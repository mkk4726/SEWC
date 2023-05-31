import { CreateEssayInput } from './dto/essays-resolver.dto';
import { Essay } from './entities/essay.entity';
import { EssaysService } from './essays.service';
export declare class EssaysResolver {
    private readonly essaysService;
    constructor(essaysService: EssaysService);
    fetchEssay(id: number): string;
    createEssay(createEssayInput: CreateEssayInput): Promise<Essay>;
}
