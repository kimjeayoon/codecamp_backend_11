import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';
export declare class ProductsCategoriesService {
    private readonly productCategoriesRepository;
    constructor(productCategoriesRepository: Repository<ProductCategory>);
    create({ name }: {
        name: any;
    }): Promise<{
        name: any;
    } & ProductCategory>;
}
