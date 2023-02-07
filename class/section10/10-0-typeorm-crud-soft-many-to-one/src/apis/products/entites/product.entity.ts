import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductSaleslocation } from '../../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTags } from '../../productsTags/entities/productsTags.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation) // 1 대 1 연결방식을 얘기한다 누가 중심인지 @Joincolumn을 쓴다
  @Field(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;

  @ManyToOne(() => ProductCategory)
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTags, (productTags) => productTags.products)
  @Field(() => [ProductTags])
  productTags: ProductTags[];

  //@CreateDateColumn() // 데이터 등록시 등록 시간 자동으로 추가
  //createdAt: Date;

  //@UpdateDateColumn() // 데이터 수정시 수정 시간 자동으로 추가
  //updatedAt: Date;

  @DeleteDateColumn() // 소프트삭제 시간 기록을 위함
  deletedAt222qqq: Date;
}
