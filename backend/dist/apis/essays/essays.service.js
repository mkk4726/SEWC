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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EssaysService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const essay_entity_1 = require("./entities/essay.entity");
const typeorm_2 = require("@nestjs/typeorm");
let EssaysService = class EssaysService {
    constructor(essayRepository) {
        this.essayRepository = essayRepository;
    }
    findOne({ id }) {
        return this.essayRepository.findOne({ where: { id } });
    }
    async findAll() {
        const result = await this.essayRepository.find({
            relations: ['user'],
        });
        console.log(result);
        return result;
    }
    async create({ createEssayInput }) {
        const { userID } = createEssayInput, essay = __rest(createEssayInput, ["userID"]);
        const result = await this.essayRepository.save(Object.assign(Object.assign({}, essay), { user: {
                id: userID,
            } }));
        return result;
    }
};
EssaysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(essay_entity_1.Essay)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EssaysService);
exports.EssaysService = EssaysService;
//# sourceMappingURL=essays.service.js.map