import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interfaces/auth-service.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, //

    private readonly jwtService: JwtService,
  ) {}

  async login({ email, pwd }: IAuthServiceLogin): Promise<string> {
    const user = await this.usersService.findOneByEmail({ email });

    if (!user) throw new UnprocessableEntityException('이메일이 없습니다');

    const isAuth = await bcrypt.compare(pwd, user.pwd);
    if (!isAuth)
      throw new UnprocessableEntityException('비밀번호가 틀렸습니다');

    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.user_id },
      { secret: 'pwd', expiresIn: '1h' },
    );
  }
}
