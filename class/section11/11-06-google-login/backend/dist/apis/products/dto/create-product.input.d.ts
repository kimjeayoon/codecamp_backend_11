import { ProductSaleslocationInput } from 'src/apis/productsSaleslocations/dto/product-saleslocation.input';
export declare class CreateProductInput {
    name: string;
    description: string;
    price: number;
    productSaleslocation: ProductSaleslocationInput;
    productCategoryId: string;
    productTags: string[];
}
