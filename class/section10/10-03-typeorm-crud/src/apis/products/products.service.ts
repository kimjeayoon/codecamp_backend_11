import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entites/product.entity';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
} from './interfaces/products-service.interface';

@Injectable({})
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productRepository.save({
      ...createProductInput,
      //  하나하나 직접 나열하는 방식이다
      // name: '마우스',
      // description: '좋은 마우스',
      // price: 3000,
    });
    // result 안에는 무엇이 있을까?
    // result = {
    //     id: "qrwrettq=erqtqert"
    //     name: "마우스",
    //     description: '좋은 마우스'
    //     price: 3000,
    //   }
    return result;
  }
}
