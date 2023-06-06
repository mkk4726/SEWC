import { ChatGPTService } from './chatgqt.service';
export declare class ChatGPTResolver {
    private readonly chatgptService;
    constructor(chatgptService: ChatGPTService);
    checkEssay(essay: string): Promise<string>;
}
