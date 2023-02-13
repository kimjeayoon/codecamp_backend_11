"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const productSaleslocation_entity_1 = require("../productsSaleslocations/entities/productSaleslocation.entity");
const productTag_entity_1 = require("../productsTags/entities/productTag.entity");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productsRepository, productsSaleslocationRepository, productsTagsRepository) {
        this.productsRepository = productsRepository;
        this.productsSaleslocationRepository = productsSaleslocationRepository;
        this.productsTagsRepository = productsTagsRepository;
    }
    findAll() {
        return this.productsRepository.find({
            relations: ['productSaleslocation', 'productCategory', 'productTags'],
        });
    }
    findOne({ productId }) {
        return this.productsRepository.findOne({
            where: { id: productId },
            relations: ['productSaleslocation', 'productCategory', 'productTags'],
        });
    }
    async create({ createProductInput }) {
        const { productSaleslocation, productCategoryId, productTags } = createProductInput, product = __rest(createProductInput, ["productSaleslocation", "productCategoryId", "productTags"]);
        const result = await this.productsSaleslocationRepository.save(Object.assign({}, productSaleslocation));
        const tagNames = productTags.map((el) => el.replace('#', ''));
        const prevTags = await this.productsTagsRepository.find({
            where: { name: (0, typeorm_2.In)([...tagNames]) },
        });
        const temp = [];
        tagNames.forEach((el) => {
            const exists = prevTags.find((prevEl) => el === prevEl.name);
            if (!exists)
                temp.push({ name: el });
        });
        const newTags = await this.productsTagsRepository.insert([...temp]);
        const tags = [...prevTags, ...newTags.identifiers];
        const result2 = await this.productsRepository.save(Object.assign(Object.assign({}, product), { productSaleslocation: result, productCategory: {
                id: productCategoryId,
            }, productTags: tags }));
        return result2;
    }
    async update({ productId, updateProductInput }) {
        const myproduct = await this.productsRepository.findOne({
            where: { id: productId },
        });
        const result = this.productsRepository.save(Object.assign(Object.assign(Object.assign({}, myproduct), { id: productId }), updateProductInput));
        return result;
    }
    async checkSoldout({ productId }) {
        const product = await this.productsRepository.findOne({
            where: { id: productId },
        });
        if (product.isSoldout)
            throw new common_1.UnprocessableEntityException('이미 판매 완료된 상품입니다');
    }
    async delete({ productId }) {
        const result = await this.productsRepository.softDelete({ id: productId });
        return result.affected ? true : false;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(productSaleslocation_entity_1.ProductSaleslocation)),
    __param(2, (0, typeorm_1.InjectRepository)(productTag_entity_1.ProductTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.upgrade.service.js.map