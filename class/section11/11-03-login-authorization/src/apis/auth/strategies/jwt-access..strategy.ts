// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';

// //import { KaKaoStrategy} from 'passport-kakao'
// //import { NaverStrategy} from 'passport-naver'
// //import { GoogleStrategy} from 'passport-google'

// // export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
// //   constructor() {
// //     super({
// //       //   jwtFromRequest: (req) => {
// //       //     const temp = req.headers.Authorization;
// //       //     const accessToken = temp.toLowercase().replace('bearer ', '');
// //       //   }, //accessToken

// //       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// //       secretOrKey: '1234',
// //     });
// //   }

// //   validate(payload) {
// //     console.log(payload); // { sub:sauihfi(유저ID)}

// //     return {
// //       id: payload.sub,
// //     };
// //   }
// // }

// jwt-access.strategy.ts

import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '1234',
    });
  }

  validate(payload) {
    console.log(payload); // { email: q@q.com, sub: askljdfklj-128930djk }
    return {
      id: payload.sub,
    };
  }
}
