import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAirportInput {
  @Field(() => String)
  airport_name: string;

  @Field(() => String)
  airport_code: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  city: string;
}
