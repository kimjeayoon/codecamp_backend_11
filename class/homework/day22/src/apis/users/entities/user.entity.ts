import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
  personal: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  phone: string;

  @Column()
  pwd: string;

  @Column()
  @Field(() => String)
  gender: string;

  @CreateDateColumn()
  @Field(() => Date)
  created_at: Date;

  @CreateDateColumn()
  @Field(() => Date)
  updated_at: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
