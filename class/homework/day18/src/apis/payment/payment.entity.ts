import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ticket } from '../ticket/ticket.entity';
import { User } from '../users/entities/user.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  trans_num: number;

  @Column()
  trans_status: string;

  @Column()
  created_at: Date;

  @ManyToOne(() => Ticket)
  tickets: Ticket;

  @ManyToOne(() => User)
  users: User;
}
