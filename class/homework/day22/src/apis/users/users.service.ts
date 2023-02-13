import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUsersServiceCreate,
  IUsersServiceDelete,
  IUsersServiceFindOne,
  IUsersServiceFindOneFyPersonal,
  IUsersServiceUpdate,
  IUserServiceHashed,
  IUsersServiceFindOneFyEmail,
  IUserServiceUpdatePwd,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne({ userId }: IUsersServiceFindOne): Promise<User> {
    return this.usersRepository.findOne({ where: { user_id: userId } });
  }

  findOneByPersonal({
    personal,
  }: IUsersServiceFindOneFyPersonal): Promise<User> {
    return this.usersRepository.findOne({ where: { personal } });
  }

  findOneByEmail({ email }: IUsersServiceFindOneFyEmail): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  PushHasedPwd({ pwd }: IUserServiceHashed): Promise<string> {
    return bcrypt.hash(pwd, 10);
  }

  async create({ createUserInput }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByPersonal({
      personal: createUserInput.personal,
    });
    if (user) throw new ConflictException('이미 가입한 회원입니다.'); // 주민번호가 같은 사람이 있다면 출력
    const HashedPwd = await this.PushHasedPwd({ pwd: createUserInput.pwd });
    const result = this.usersRepository.save({
      ...createUserInput,
      pwd: HashedPwd,
    });

    return result;
  }

  async update({
    userId,
    updateUserInput,
  }: IUsersServiceUpdate): Promise<User> {
    const user = await this.findOne({ userId });

    const result = this.usersRepository.save({
      ...user,
      ...updateUserInput,
    });
    return result;
  }

  async updatePwd({ userId, pwd }: IUserServiceUpdatePwd) {
    const user = await this.findOne({ userId });

    const hashedPwd = await this.PushHasedPwd({ pwd });

    return this.usersRepository.save({
      ...user,
      pwd: hashedPwd,
    });
  }

  async delete({ userId }: IUsersServiceDelete): Promise<boolean> {
    const result = await this.usersRepository.softDelete({
      user_id: userId,
    });
    return result.affected ? true : false;
  }
}
