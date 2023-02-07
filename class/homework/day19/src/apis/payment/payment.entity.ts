import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ticket } from '../ticket/ticket.entity';
import { User } from '../users/entities/user.entity';

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Number)
  trans_num: number;

  @Column()
  @Field(() => String)
  trans_status: string;

  @Column()
  @Field(() => Date)
  created_at: Date;

  @ManyToOne(() => Ticket)
  tickets: Ticket;

  @ManyToOne(() => User)
  users: User;
}
