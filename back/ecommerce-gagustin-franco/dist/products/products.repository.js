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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const products_entity_1 = require("./entities/products.entity");
let ProductsRepository = class ProductsRepository {
    productsRepository;
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async getProducts(page, limit) {
        return this.productsRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            relations: ['category'],
        });
    }
    async getProductsById(id) {
        if (!id)
            throw new common_1.HttpException("Product does not exist", common_1.HttpStatus.BAD_REQUEST);
        const product = await this.productsRepository.findOne({
            where: { id },
            relations: ["category"]
        });
        if (!product)
            throw new common_1.HttpException("Product not found", common_1.HttpStatus.NOT_FOUND);
        return product;
    }
    async createProduct(product) {
        const exists = await this.productsRepository.findOne({ where: { name: product.name } });
        if (exists)
            return null;
        const newProduct = this.productsRepository.create({
            ...product,
            imgUrl: product.imgUrl || undefined,
            orderDetails: [],
        });
        return this.productsRepository.save(newProduct);
    }
    async addProductsFromSeeder(products, categoriesRepository) {
        const added = [];
        for (const productData of products) {
            const exists = await this.productsRepository.findOne({ where: { name: productData.name } });
            if (!exists) {
                const category = await categoriesRepository.getCategories().then(categories => categories.find(category => category.name === productData.category));
                if (category) {
                    const newProduct = this.productsRepository.create({
                        name: productData.name,
                        description: productData.description,
                        price: productData.price,
                        stock: productData.stock,
                        category,
                    });
                    await this.productsRepository.save(newProduct);
                    added.push(newProduct);
                }
            }
        }
        return added;
    }
    async saveProduct(product) {
        return this.productsRepository.save(product);
    }
    async updateProduct(id, updatedProduct) {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (!product)
            return null;
        await this.productsRepository.update(id, updatedProduct);
        return this.productsRepository.findOne({ where: { id }, relations: ['category'] });
    }
    async deleteProduct(id) {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (!product)
            return null;
        await this.productsRepository.remove(product);
        return product;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(products_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map