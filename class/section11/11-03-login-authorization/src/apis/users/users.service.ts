import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUsersServiceFindOneFyEmail,
  IUsersServiceCreate,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findOneByEmail({ email }: IUsersServiceFindOneFyEmail): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create({
    email,
    password,
    name,
    age,
  }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByEmail({ email });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.'); // 에러 코드 간략하게 보이게 하는법

    const hashedPassword = await bcrypt.hash(password, 10); // 여러번 반복하니 await를 써준다

    return this.usersRepository.save({
      email,
      password: hashedPassword,
      name,
      age,
    });
  }
}
