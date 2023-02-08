import { Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TicketAirport {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  ticketAirport_id: string;

  @Column()
  @Field(() => String)
  airport_name: string;

  @Column()
  @Field(() => String)
  airport_code: string;

  @Column()
  @Field(() => String)
  country: string;

  @Column()
  @Field(() => String)
  city: string;
}
