import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entites/product.entity';
import { ProductsResolver } from './products.resolvor';
import { ProductsService } from './products.service';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductSaleslocation,
    ]),
  ],

  providers: [
    ProductsResolver, //
    ProductsService,
    ProductsSaleslocationsService,
  ],
})
export class ProductsModule {}
