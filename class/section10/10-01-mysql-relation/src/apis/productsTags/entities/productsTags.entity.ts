import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entites/product.entity';

@Entity()
export class ProductTags {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Product, (products) => products.productTags)
  products: Product[];
}
