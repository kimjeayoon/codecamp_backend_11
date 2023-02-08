import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TicketAirline } from '../../ticketAirline/entities/ticketAriline.entity';
import { TicketAirport } from '../../ticketAirport/entities/ticketAirport.entity';
@Entity()
@ObjectType()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  ticket_id: string;

  @Field(() => Date)
  arriving_time: Date;

  @Field(() => Date)
  departing_time: Date;

  @Field(() => String)
  arriving_gate: string;

  @Field(() => String)
  departing_gate: string;

  @Field(() => Int)
  ticket_num: number;

  @Field(() => String)
  ticket_image: string;

  @Field(() => Date)
  created_at: Date;

  @Field(() => String)
  travel_class: string;

  @Field(() => Int)
  limit_count: number;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @ManyToOne(() => TicketAirline)
  ticketAirline: TicketAirline;

  @ManyToOne(() => TicketAirport)
  departing_airport: TicketAirport;

  @ManyToOne(() => TicketAirport)
  arriving_airport: TicketAirport;
}
