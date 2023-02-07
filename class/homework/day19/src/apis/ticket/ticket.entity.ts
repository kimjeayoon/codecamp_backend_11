import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Min } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TicketAirline } from '../ticketAirline/ticketAriline.entity';
import { TicketAirport } from '../ticketAirport/ticketAirport.entity';
@Entity()
@ObjectType()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Date)
  arriving_time: Date;

  @Field(() => Date)
  departing_time: Date;

  @Field(() => String)
  arriving_gate: string;

  @Field(() => String)
  departing_gate: string;

  @Field(() => Number)
  ticket_num: number;

  @Field(() => String)
  ticket_image: string;

  @Field(() => Date)
  created_at: Date;

  @Field(() => String)
  travel_class: string;

  @Field(() => Number)
  limit_count: number;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @JoinColumn()
  @OneToOne(() => TicketAirline)
  ticketAirline: TicketAirline;

  @JoinColumn()
  @OneToOne(() => TicketAirport)
  departing_airport: TicketAirport;

  @JoinColumn()
  @OneToOne(() => TicketAirport)
  arriving_airport: TicketAirport;
}
