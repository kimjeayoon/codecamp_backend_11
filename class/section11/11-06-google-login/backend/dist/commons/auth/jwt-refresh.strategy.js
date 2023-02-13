"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtRefreshStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class JwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'refresh') {
    constructor() {
        super({
            jwtFromRequest: (req) => {
                console.log(req);
                const cookie = req.headers.cookie;
                const refreshToken = cookie.replace('refreshToken=', '');
                return refreshToken;
            },
            secretOrKey: process.env.JWT_REFRESH_KEY,
        });
    }
    validate(payload) {
        console.log(payload);
        return {
            email: payload.email,
            id: payload.sub,
        };
    }
}
exports.JwtRefreshStrategy = JwtRefreshStrategy;
//# sourceMappingURL=jwt-refresh.strategy.js.map