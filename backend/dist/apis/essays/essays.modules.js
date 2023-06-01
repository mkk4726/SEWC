"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EssaysModule = void 0;
const common_1 = require("@nestjs/common");
const essays_resolver_1 = require("./essays.resolver");
const essays_service_1 = require("./essays.service");
const typeorm_1 = require("@nestjs/typeorm");
const essay_entity_1 = require("./entities/essay.entity");
const user_entity_1 = require("../users/entities/user.entity");
let EssaysModule = class EssaysModule {
};
EssaysModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                essay_entity_1.Essay,
                user_entity_1.User,
            ]),
        ],
        providers: [
            essays_resolver_1.EssaysResolver,
            essays_service_1.EssaysService,
        ],
    })
], EssaysModule);
exports.EssaysModule = EssaysModule;
//# sourceMappingURL=essays.modules.js.map