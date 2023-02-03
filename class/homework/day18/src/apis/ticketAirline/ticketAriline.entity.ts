import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TicketAirline {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  airport_name: string;

  @Column()
  airport_code: string;
}
