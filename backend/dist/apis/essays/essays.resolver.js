"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EssaysResolver = void 0;
const essays_service_1 = require("./essays.service");
const graphql_1 = require("@nestjs/graphql");
let EssaysResolver = class EssaysResolver {
    constructor(essaysService) {
        this.essaysService = essaysService;
    }
    fetchEssay() {
        return this.essaysService.read();
    }
};
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], EssaysResolver.prototype, "fetchEssay", null);
EssaysResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [essays_service_1.EssaysService])
], EssaysResolver);
exports.EssaysResolver = EssaysResolver;
//# sourceMappingURL=essays.resolver.js.map