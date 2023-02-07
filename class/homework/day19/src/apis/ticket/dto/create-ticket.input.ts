import { InputType, Field, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateTicketInput {
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
}
