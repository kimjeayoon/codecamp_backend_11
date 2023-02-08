import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  ko_name: string;

  @Field(() => String)
  en_name: string;

  @Field(() => String)
  en_last_name: string;

  @Field(() => String)
  personal: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  pwd: string;

  @Field(() => String)
  gender: string;

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;
}
