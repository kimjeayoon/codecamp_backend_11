import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStarbuckInput {
  @Field(() => String)
  menu: string;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  kcal: number;

  @Field(() => Number)
  saturated_fat: number;

  @Field(() => Number)
  protein: number;

  @Field(() => Number)
  salt: number;

  @Field(() => Number)
  sugar: number;

  @Field(() => Number)
  caffeine: number;
}
