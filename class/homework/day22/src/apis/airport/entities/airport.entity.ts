import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Airport {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  airport_id: string;

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
