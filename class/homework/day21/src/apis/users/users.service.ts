import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUsersServiceCheckSoldout,
  IUsersServiceCreate,
  IUsersServiceDelete,
  IUsersServiceFindOne,
  IUsersServiceFindOneFyPersonal,
  IUsersServiceUpdate,
  IUserServiceHashed,
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
  PushHasedPwd({ pwd }: IUserServiceHashed): Promise<string> {
    return bcrypt.hash(pwd, 10);
  }

  async create({ createUserInput }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByPersonal({
      personal: createUserInput.personal,
    });
    if (user) throw new ConflictException('이미 등록된 가입한 회원입니다.'); // 주민번호가 같은 사람이 있다면 출력
    const HashedPwd = await this.PushHasedPwd({ pwd: createUserInput.pwd });
    const result = this.usersRepository.save({
      ...createUserInput,
      pwd: HashedPwd,
    });

    return result;
  }

  // async create({
  //   ko_name,
  //   en_name,
  //   en_last_name,
  //   ,
  //   email,
  //   phone,
  //   pwd,
  //   gender,
  //   created_at,
  //   updated_at,
  // }: IUsersServiceCreate): Promise<User> {
  //   const user = await this.findOneByPersonal({ personal });
  //   if (user) throw new ConflictException('이미 등록된 가입한 회원입니다.');

  //   const hashedPassword = await bcrypt.hash(pwd, 10); // 여러번 반복하니 await를 써준다

  //   return this.usersRepository.save({
  //     ko_name,
  //     en_name,
  //     en_last_name,
  //     personal,
  //     email,
  //     phone,
  //     pwd: hashedPassword,
  //     gender,
  //     created_at,
  //     updated_at,
  //   });
  // }

  async update({
    userId,
    updateUserInput,
  }: IUsersServiceUpdate): Promise<User> {
    this.findOne({ userId });

    const user = await this.findOne({ userId });

    this.checkSoldout({ user });

    const result = this.usersRepository.save({
      ...user,
      ...updateUserInput,
    });
    return result;
  }

  checkSoldout({ user }: IUsersServiceCheckSoldout): void {
    if (user.personal) {
      throw new UnprocessableEntityException('이미 가입한 유저입니다.');
    }
  }

  async delete({ userId }: IUsersServiceDelete): Promise<boolean> {
    const result = await this.usersRepository.softDelete({
      user_id: userId,
    });
    return result.affected ? true : false;
  }

  findOneByPersonal({
    personal,
  }: IUsersServiceFindOneFyPersonal): Promise<User> {
    return this.usersRepository.findOne({ where: { personal } });
  }
}
