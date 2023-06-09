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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const bycrpt = require("bcrypt");
const checkInput_1 = require("../../commons/functions/checkInput");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    find() {
        return 'UserID ( tech dept)';
    }
    findOneByEmail({ email }) {
        return this.usersRepository.findOne({
            where: { email },
        });
    }
    async create({ createUserInput }) {
        const user = await this.findOneByEmail({ email: createUserInput.email });
        if (user) {
            throw new common_1.HttpException('이미등록된 이메일입니다.', common_1.HttpStatus.CONFLICT);
        }
        if (!(0, checkInput_1.checkEmail)(createUserInput.email)) {
            throw new common_1.HttpException('이메일 형식을 확인해주세요', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bycrpt.hash(createUserInput.password, 10);
        const result = this.usersRepository.save(Object.assign(Object.assign({}, createUserInput), { password: hashedPassword }));
        return result;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map