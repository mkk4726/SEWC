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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    async login({ loginInput }) {
        const user = await this.userService.findOneByEmail({
            email: loginInput.email,
        });
        if (!user)
            throw new common_1.HttpException('등록된 이메일이 없습니다.', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        const isAuth = bcrypt.compare(loginInput.password, user.password);
        if (!isAuth)
            throw new common_1.UnprocessableEntityException('암호가 틀렸습니다.');
        return 'accessToken ( tech dept )';
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map