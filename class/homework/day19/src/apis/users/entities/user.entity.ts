import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  user_id: string;

  @Column()
  @Field(() => String)
  ko_name: string;

  @Column()
  @Field(() => String)
  en_name: string;

  @Column()
  @Field(() => String)
  en_last_name: string;

  @Column()
  @Field(() => String)
  birth_date: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  mobile: string;

  @Column()
  @Field(() => String)
  pwd: string;

  @Column()
  @Field(() => String)
  gender: string;

  @Column()
  @Field(() => Date)
  created_at: Date;

  @Column()
  @Field(() => Date)
  updated_at: Date;
}
