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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const categories_repository_1 = require("../categories/categories.repository");
let ProductsService = class ProductsService {
    productsRepository;
    categoriesRepository;
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getProducts(page = 1, limit = 5) {
        return this.productsRepository.getProducts(page, limit);
    }
    async getProductsById(id) {
        return this.productsRepository.getProductsById(id);
    }
    async createProduct(product) {
        if (product.stock !== undefined && typeof product.stock !== 'number') {
            throw new Error('Stock must be a number');
        }
        const categoryId = product.category && typeof product.category === 'object' && 'id' in product.category ? product.category.id : undefined;
        let validatedProduct = { ...product, orderDetails: [] };
        if (categoryId) {
            const category = await this.categoriesRepository.getCategories().then(categories => categories.find(cat => cat.id === categoryId));
            if (!category) {
                throw new Error('Category not found');
            }
            validatedProduct = { ...validatedProduct, category };
        }
        const newProduct = await this.productsRepository.createProduct(validatedProduct);
        return newProduct ? { id: newProduct.id } : null;
    }
    async addProductsFromSeeder(products) {
        return this.productsRepository.addProductsFromSeeder(products, this.categoriesRepository);
    }
    async updateProduct(id, updateProduct) {
        if (updateProduct.stock !== undefined && typeof updateProduct.stock !== 'number') {
            throw new Error('Stock must be a number');
        }
        const categoryId = updateProduct.category && typeof updateProduct.category === 'object' && 'id' in updateProduct.category ? updateProduct.category.id : undefined;
        const validatedProduct = { ...updateProduct };
        if (categoryId) {
            const category = await this.categoriesRepository.getCategories().then(categories => categories.find(cat => cat.id === categoryId));
            if (!category)
                throw new Error('Category not found');
            validatedProduct.category = category;
        }
        const updated = await this.productsRepository.updateProduct(id, validatedProduct);
        return updated ? { id: updated.id } : null;
    }
    async deleteProduct(id) {
        const deleted = await this.productsRepository.deleteProduct(id);
        return { id: deleted?.id };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository,
        categories_repository_1.CategoriesRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map