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
const dist_1 = require("@nestjs/jwt/dist");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login({ loginInput, context }) {
        const user = await this.userService.findOneByEmail({
            email: loginInput.email,
        });
        if (!user)
            throw new common_1.HttpException('등록된 이메일이 없습니다.', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        const isAuth = bcrypt.compare(loginInput.password, user.password);
        if (!isAuth)
            throw new common_1.UnprocessableEntityException('암호가 틀렸습니다.');
        this.setRefreshToken({ user, res: context.res });
        return this.getAccessToken({ user });
    }
    getAccessToken({ user }) {
        return this.jwtService.sign({ sub: user.id }, { secret: 'myAccessToken', expiresIn: '1h' });
    }
    setRefreshToken({ user, res }) {
        const refreshToken = this.jwtService.sign({ sub: user.id }, { secret: 'myRefreshToken', expiresIn: '2w' });
        res.setHeader('set-Cookie', `refreshToken=${refreshToken}; path=/;`);
    }
    restoreAccessToken({ user }) {
        return this.getAccessToken({ user });
    }
    async OAuthLogin({ req, social }) {
        if (social === 'google') {
        }
        if (social === 'naver') {
            req.user.email = `${req.user.mobile}@naver.com`;
        }
        if (social === 'kakao') {
            req.user.email = `${req.user.id}@kakao.com`;
        }
        let user = await this.userService.findOneByEmail({
            email: req.user.email,
        });
        if (!user)
            user = await this.userService.create({
                createUserInput: req.user,
            });
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        dist_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map