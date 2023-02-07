import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;

  @Field(() => String)
  writer: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  contents: string;
}
