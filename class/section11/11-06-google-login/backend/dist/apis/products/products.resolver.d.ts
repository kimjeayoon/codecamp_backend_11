import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
export declare class ProductsResolver {
    private readonly productsService;
    constructor(productsService: ProductsService);
    fetchProducts(): Promise<Product[]>;
    fetchProduct(productId: string): Promise<Product>;
    createProduct(createProductInput: CreateProductInput): Promise<any>;
    updateProduct(productId: string, updateProductInput: UpdateProductInput): Promise<any>;
    deleteProduct(productId: string): Promise<boolean>;
}
