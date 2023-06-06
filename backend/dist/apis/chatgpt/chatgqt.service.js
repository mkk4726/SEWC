"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let ChatGPTService = class ChatGPTService {
    constructor() {
        this.checkEssay = async ({ essay }) => {
            const configuration = new openai_1.Configuration({
                apiKey: process.env.ChatGPT_SECRET_KEY,
            });
            const openai = new openai_1.OpenAIApi(configuration);
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are english teacher. Check my essay and change it more natural and grammatically correct. Must give me feedback about it in detail and some suggestions.',
                    },
                    { role: 'user', content: essay },
                ],
            });
            const responseMessage = completion.data.choices[0].message.content;
            return responseMessage;
        };
    }
};
ChatGPTService = __decorate([
    (0, common_1.Injectable)()
], ChatGPTService);
exports.ChatGPTService = ChatGPTService;
//# sourceMappingURL=chatgqt.service.js.map