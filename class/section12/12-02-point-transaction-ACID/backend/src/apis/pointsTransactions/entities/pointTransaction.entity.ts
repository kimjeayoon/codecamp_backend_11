import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum POINT_TRANSACTION_STAYUS_ENUM {
  PAYMENT = 'PAYMENT',
  CANCEL = 'CANCEL',
}

registerEnumType(POINT_TRANSACTION_STAYUS_ENUM, {
  name: 'POINT_TRANSACTION_STAYUS_ENUM',
});

@Entity()
@ObjectType()
export class PointTransaction {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  impUid: string;

  @Column()
  @Field(() => Int)
  amount: number;

  @Column({ type: 'enum', enum: POINT_TRANSACTION_STAYUS_ENUM }) // 타입이 enum이고 enum은 POINT_TRANSACTION_STAYUS_ENUM라는것을 mysql에 알려주는것
  @Field(() => POINT_TRANSACTION_STAYUS_ENUM)
  status: POINT_TRANSACTION_STAYUS_ENUM;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;
  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;
}
