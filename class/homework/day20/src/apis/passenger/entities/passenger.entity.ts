import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Payment } from '../../payment/entities/payment.entity';

@Entity()
@ObjectType()
export class Passenger {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  passenger_id: string;

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
  @Field(() => Date)
  birth_date: Date;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  mobile: string;

  @Column()
  @Field(() => String)
  gender: string;

  @JoinColumn()
  @OneToOne(() => Payment)
  payments: Payment;
}
