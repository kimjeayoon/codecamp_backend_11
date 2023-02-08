import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entites/product.entity';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceDelete,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';
import { UpdateProductInput } from './dto/update-product.input';

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

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    this.findOne({ productId });
    //기존 있는 내용을 재사용하여, 로직을 통일하자!!
    const product = await this.findOne({ productId });

    // 검증은 서비스에서 하자!!
    this.checkSoldout({ product });

    // this.productRepository.create(); // DB 접속이랑 관련 없음 . 등록을 위해서 빈 껍데기 객체를 만듬
    // this.productRepository.insert(); // 결과를 객체로 못돌려받는 등록방법
    // this.productRepository.update();  // 결과를 객체로 못돌려받는 수정방법

    const result = this.productRepository.save({
      ...product, // 수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 돌려 받고 싶을 때
      ...updateProductInput,
    });
    return result;
  }

  // 1. checkSoldout을 함수로 만드는 이유 => 수정시, 삭제시 등 같은 검증 로직 사용
  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }

    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상태입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }

  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    //   // 1. 실제 삭제
    //   const result = await this.productRepository.delete({ id: productId });
    //   return result.affected ? true : false;
    //   // 2.소프트삭제(직접 구현) - isDeleted
    //   this.productRepository.update({ id: productId }, { isDeleted: true });
    // 3. 소프트 삭제(직접 구현)- deletedAt
    //this.productRepository.update({ id: productId }, { deletedAt: new Date() });
    // 4. 소프트 삭제(TypeORM 제공) - softRemove
    // this.productRepository.softRemove({ id: productId }); // 단점: id로만 삭제 가능
    //                                                       // 장점;  여러ID 한번에 지우기 기능
    //                                                       //      .softRemove([{id: qqq},{id: aaa},{id: zzz}])
    // 5. 소프트 삭제(TypeORM 제공) - softDelete
    const result = await this.productRepository.softDelete({ id: productId }); // 단점: 여려 ID 한번에 지우기 불가능
    return result.affected ? true : false; //                                  // 장점; 다른 컬럼으로도 삭제 가능
  }
}


