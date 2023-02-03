import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Payment } from '../payment/payment.entity';

@Entity()
export class Passenger {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ko_name: string;

  @Column()
  en_first_name: string;

  @Column()
  en_last_name: string;

  @Column()
  birth_date: string;

  @Column()
  email: string;

  @Column()
  mobile: number;

  @Column()
  gender: string;

  @JoinColumn()
  @OneToOne(() => Payment)
  payments: Payment;
}
