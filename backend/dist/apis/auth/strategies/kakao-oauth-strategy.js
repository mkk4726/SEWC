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
exports.KakaoStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_kakao_1 = require("passport-kakao");
let KakaoStrategy = class KakaoStrategy extends (0, passport_1.PassportStrategy)(passport_kakao_1.Strategy, 'kakao') {
    constructor() {
        super({
            clientID: process.env.OAUTH_KAKAO_ID,
            clientSecret: process.env.OAUTH_KAKAO_SECRET,
            callbackURL: process.env.OAUTH_KAKAO_REDIRECT,
            scope: ['account_email', 'profile_nickname'],
        });
    }
    validate(accessToken, refreshToken, profile) {
        return {
            name: profile.displayName,
            email: profile.email,
            password: '0000',
            age: 0,
            id: profile.id,
        };
    }
};
KakaoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], KakaoStrategy);
exports.KakaoStrategy = KakaoStrategy;
//# sourceMappingURL=kakao-oauth-strategy.js.map