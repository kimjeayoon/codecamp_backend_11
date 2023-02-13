import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from '../productsTags/entities/productTag.entity';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private readonly productsRepository;
    private readonly productsSaleslocationRepository;
    private readonly productsTagsRepository;
    constructor(productsRepository: Repository<Product>, productsSaleslocationRepository: Repository<ProductSaleslocation>, productsTagsRepository: Repository<ProductTag>);
    findAll(): Promise<Product[]>;
    findOne({ productId }: {
        productId: any;
    }): Promise<Product>;
    create({ createProductInput }: {
        createProductInput: any;
    }): Promise<any>;
    update({ productId, updateProductInput }: {
        productId: any;
        updateProductInput: any;
    }): Promise<any>;
    checkSoldout({ productId }: {
        productId: any;
    }): Promise<void>;
    delete({ productId }: {
        productId: any;
    }): Promise<boolean>;
}
