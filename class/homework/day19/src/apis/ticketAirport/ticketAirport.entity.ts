import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TicketAirport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  airport_name: string;

  @Column()
  airport_code: string;

  @Column()
  country: string;

  @Column()
  city: string;
}
