import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { CategoriesRepository } from "src/categories/categories.repository";
import { Product } from "./entities/products.entity";
import { CreateProductDto } from "./dto/createProductDto";
import { UpdateProductDto } from "./dto/updateProductDto";

@Injectable()
export class ProductsService {
    constructor(private productsRepository: ProductsRepository,
                private categoriesRepository: CategoriesRepository
    ){}

        async getProducts(page = 1, limit = 5) {
            return this.productsRepository.getProducts(page, limit);
        }

        async getProductsById(id: string) {
            return this.productsRepository.getProductsById(id);
        }

        async createProduct(product: Partial<CreateProductDto>): Promise<{ id: string } | null> {
                if (product.stock !== undefined && typeof product.stock !== 'number') {
                throw new Error('Stock must be a number');
                }
            
                const categoryId = product.category && typeof product.category === 'object' && 'id' in product.category ? product.category.id : undefined;
                let validatedProduct: Partial<CreateProductDto> = { ...product, orderDetails: [] };
            
                if (categoryId) {
                const category = await this.categoriesRepository.getCategories().then(categories =>
                    categories.find(cat => cat.id === categoryId),
                );
                if (!category) {
                    throw new Error('Category not found');
                }
                validatedProduct = { ...validatedProduct, category };
                }
            
                const newProduct = await this.productsRepository.createProduct(validatedProduct);
                return newProduct ? { id: newProduct.id } : null;
            }

        async addProductsFromSeeder(products: any[]) {
            return this.productsRepository.addProductsFromSeeder(products, this.categoriesRepository);
        }

        async updateProduct(id: string, updateProduct: Partial<UpdateProductDto>): Promise<{ id: string } | null> {
            if (updateProduct.stock !== undefined && typeof updateProduct.stock !== 'number') {
                throw new Error('Stock must be a number');
                }
            
                const categoryId = updateProduct.category && typeof updateProduct.category === 'object' && 'id' in updateProduct.category ? updateProduct.category.id : undefined;
                const validatedProduct: Partial<UpdateProductDto> = { ...updateProduct };
            
                if (categoryId) {
                const category = await this.categoriesRepository.getCategories().then(categories =>
                    categories.find(cat => cat.id === categoryId),
                );
                if (!category) throw new Error('Category not found');
                validatedProduct.category = category;
                }
            
                const updated = await this.productsRepository.updateProduct(id, validatedProduct);
                return updated ? { id: updated.id } : null;
            }

        async deleteProduct(id:string){
            const deleted = await this.productsRepository.deleteProduct(id);
            return {id: deleted?.id}
        }
}