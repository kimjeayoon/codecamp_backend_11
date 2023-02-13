import { ProductCategory } from './entities/productCategory.entity';
import { ProductsCategoriesService } from './productsCategories.service';
export declare class ProductsCategoriesResolver {
    private readonly productCategoriesService;
    constructor(productCategoriesService: ProductsCategoriesService);
    createProductCategory(name: string): Promise<{
        name: any;
    } & ProductCategory>;
}
