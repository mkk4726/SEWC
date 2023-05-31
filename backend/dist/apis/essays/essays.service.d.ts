import { IEssayServiceCreateEssay, IEssaysServiceFetchEssay } from './interfaces/essays-service.interfaces';
export declare class EssaysService {
    fetchEssay({ id }: IEssaysServiceFetchEssay): string;
    createEssay({ createEssayInput }: IEssayServiceCreateEssay): string;
}
