import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCategory } from '../../prductsCategories/entities/productCategory.entity';
import { ProductSaleslocation } from '../../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTags } from '../../productsTags/entities/productsTags.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: false })
  isSoldout: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation) // 1 대 1 연결방식을 얘기한다 누가 중심인지 @Joincolumn을 쓴다
  productSaleslocation: ProductSaleslocation;

  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTags, (productTags) => productTags.products)
  productTags: ProductTags[];
}
