import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { Product } from "./product.interface";

@Injectable()
export class ProductsService {
    constructor(private productsRepository: ProductsRepository ){}

        async getProducts(page = 1, limit = 5) {
            return this.productsRepository.getProducts(page, limit);
        }

        async getProductsById(id: number) {
            return this.productsRepository.getProductsById(id);
        }

        async createProduct(product: Product) {
            const newProduct = await this.productsRepository.createProduct(product);
            return {id: newProduct.id}
        }

        async updateProduct(id: number, updateProduct: Product) {
            const updated = await this.productsRepository.updateProduct(id, updateProduct);
            return {id: updated?.id}
        }

        async deleteProduct(id:number){
            const deleted = await this.productsRepository.deleteProduct(id);
            return {id: deleted?.id}
        }
}