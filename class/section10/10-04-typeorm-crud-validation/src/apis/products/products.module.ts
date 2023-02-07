import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entites/product.entity';
import { ProductsResolver } from './products.resolvor';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
    ]),
  ],

  providers: [
    ProductsResolver, //
    ProductsService,
  ],
})
export class ProductsModule {}
