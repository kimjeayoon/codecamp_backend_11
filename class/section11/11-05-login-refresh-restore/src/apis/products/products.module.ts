import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entites/product.entity';
import { ProductsResolver } from './products.resolvor';
import { ProductsService } from './products.service';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';
import { ProductsTagsService } from '../productsTag/productsTags.service';
import { ProductTag } from '../productsTag/entities/productTag.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductSaleslocation,
      ProductTag,
    ]),
  ],

  providers: [
    ProductsResolver, //
    ProductsService,
    ProductsSaleslocationsService,
    ProductsTagsService,
  ],
})
export class ProductsModule {}
