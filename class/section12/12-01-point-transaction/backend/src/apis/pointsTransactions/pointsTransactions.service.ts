import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STAYUS_ENUM,
} from './entities/pointTransaction.entity';
import { IPointsTransactionsServiceCreate } from './interfaces/points-transactions-service.interface';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create({
    impUid,
    amount,
    user: _user,
  }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
    // this.pointsTransactionsRepository.create(); // 등록을 위한 빈 객체 만들기
    // this.pointsTransactionsRepository.insert(); // 결과는 못받는 등록방법
    // this.pointsTransactionsRepository.update(); // 결과는 못받는 수정 방법

    // 1. PointTransaction 테이블에 거래기록 1줄 생성
    const pointTransaction = this.pointsTransactionsRepository.create({
      impUid, // 키랑 벨류가 같아서 생략이 가능한것
      amount,
      user: _user, // 키랑 벨류가 달라서 생략이  불가능한것
      status: POINT_TRANSACTION_STAYUS_ENUM.PAYMENT,
    });
    await this.pointsTransactionsRepository.save(pointTransaction);
    // 2. 유저의 돈 찾아오기
    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });

    // 3. 유저의 돈 업데이트
    await this.usersRepository.update(
      { id: _user.id },
      { point: user.point + amount },
    );

    // 4. 최종결과 브라우저에 돌려주기
    return pointTransaction;
  }
}
