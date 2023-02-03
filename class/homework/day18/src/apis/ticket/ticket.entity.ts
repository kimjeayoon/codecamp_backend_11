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
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  arriving_time: Date;

  @Column()
  departing_time: Date;

  @Column()
  arriving_gate: string;

  @Column()
  departing_gate: string;

  @Column()
  ticket_nnum: number;

  @Column()
  ticket_image: string;

  @Column()
  created_at: Date;

  @Column()
  travel_class: string;

  @Column()
  limit_count: number;

  @Column()
  price: number;

  @JoinColumn()
  @OneToOne(() => TicketAirline)
  ticketAirline: TicketAirline;

  @JoinColumn()
  @OneToOne(() => TicketAirport)
  ticketAirport: TicketAirport;
}
