import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class TicketAirline {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  TicketAirline_id: string;

  @Column()
  @Field(() => String)
  airport_name: string;

  @Column()
  @Field(() => String)
  airport_code: string;
}
