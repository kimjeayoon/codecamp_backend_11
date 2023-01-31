import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Starbuck {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;

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
