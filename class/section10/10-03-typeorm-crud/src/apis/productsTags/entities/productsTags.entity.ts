import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entites/product.entity';

@Entity()
@ObjectType()
export class ProductTags {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToMany(() => Product, (products) => products.productTags)
  @Field(() => [Product])
  products: Product[];
}
