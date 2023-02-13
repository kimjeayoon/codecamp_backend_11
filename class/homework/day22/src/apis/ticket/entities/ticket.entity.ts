import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { timestamp } from 'rxjs';
import { Airline } from 'src/apis/airline/entities/ariline.entity';
import { Airport } from 'src/apis/airport/entities/airport.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
@ObjectType()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  ticket_id: string;

  @Column({ type: 'timestamp' })
  @Field(() => Date)
  arriving_time: Date;

  @Column({ type: 'timestamp' })
  @Field(() => Date)
  departing_time: Date;

  @Column()
  @Field(() => String)
  arriving_gate: string;

  @Column()
  @Field(() => String)
  departing_gate: string;

  @Column()
  @Field(() => Int)
  ticket_num: number;

  @Column()
  @Field(() => String)
  ticket_image: string;

  @CreateDateColumn()
  @Field(() => Date)
  created_at: Date;

  @Column()
  @Field(() => String)
  travel_class: string;

  @Column()
  @Field(() => Int)
  limit_count: number;

  @Min(0)
  @Field(() => Int)
  @Column()
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @ManyToOne(() => Airline)
  Airline: Airline;

  @ManyToOne(() => Airport)
  departing_: Airport;

  @ManyToOne(() => Airport)
  arriving_: Airport;

  @DeleteDateColumn()
  deletedAt: Date;
}
