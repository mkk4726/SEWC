import { CreateEssayInput } from '../dto/essays-resolver.dto';
export interface IEssaysServiceFetchEssay {
    id: number;
}
export interface IEssayServiceCreateEssay {
    createEssayInput: CreateEssayInput;
}
