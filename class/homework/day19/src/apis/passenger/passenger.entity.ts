import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Payment } from '../payment/payment.entity';

@Entity()
@ObjectType()
export class Passenger {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  ko_name: string;

  @Column()
  @Field(() => String)
  en_first_name: string;

  @Column()
  @Field(() => String)
  en_last_name: string;

  @Column()
  @Field(() => String)
  birth_date: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => Number)
  mobile: number;

  @Column()
  @Field(() => String)
  gender: string;

  @JoinColumn()
  @OneToOne(() => Payment)
  payments: Payment;
}
