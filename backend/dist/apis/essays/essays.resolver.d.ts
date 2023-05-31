import { EssaysService } from './essays.service';
export declare class EssaysResolver {
    private readonly essaysService;
    constructor(essaysService: EssaysService);
    fetchEssay(): string;
}
