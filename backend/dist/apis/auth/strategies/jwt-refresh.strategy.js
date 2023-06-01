"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtRefreshStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class JwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'refresh') {
    constructor() {
        super({
            jwtFromRequest: (req) => {
                const cookies = req.headers.cookie.split(';');
                let cookie;
                cookies.forEach((el) => {
                    if (el.includes('refreshToken'))
                        cookie = el;
                });
                const refreshToken = cookie.replace('refreshToken=', '').trim();
                console.log(refreshToken);
                return refreshToken;
            },
            secretOrKey: 'myRefreshToken',
        });
    }
    validate(payload) {
        return { id: payload.sub };
    }
}
exports.JwtRefreshStrategy = JwtRefreshStrategy;
//# sourceMappingURL=jwt-refresh.strategy.js.map