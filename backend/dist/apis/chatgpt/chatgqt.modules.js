"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTModule = void 0;
const common_1 = require("@nestjs/common");
const chatgqt_resolver_1 = require("./chatgqt.resolver");
const chatgqt_service_1 = require("./chatgqt.service");
let ChatGPTModule = class ChatGPTModule {
};
ChatGPTModule = __decorate([
    (0, common_1.Module)({
        providers: [
            chatgqt_resolver_1.ChatGPTResolver,
            chatgqt_service_1.ChatGPTService,
        ],
        exports: [
            chatgqt_service_1.ChatGPTService,
        ],
    })
], ChatGPTModule);
exports.ChatGPTModule = ChatGPTModule;
//# sourceMappingURL=chatgqt.modules.js.map