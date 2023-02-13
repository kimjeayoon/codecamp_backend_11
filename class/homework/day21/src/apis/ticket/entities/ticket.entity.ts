import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { timestamp } from 'rxjs';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TicketAirline } from '../../ticketAirline/entities/ticketAriline.entity';
import { TicketAirport } from '../../ticketAirport/entities/ticketAirport.entity';
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

  @ManyToOne(() => TicketAirline)
  ticketAirline: TicketAirline;

  @ManyToOne(() => TicketAirport)
  departing_airport: TicketAirport;

  @ManyToOne(() => TicketAirport)
  arriving_airport: TicketAirport;

  @DeleteDateColumn()
  deletedAt: Date;
}
