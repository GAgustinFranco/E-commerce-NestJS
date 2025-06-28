import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";

@Injectable()
export class ProductsService {
    constructor(private productsRepository: ProductsRepository ){}

    getProducts() {
        return this.productsRepository.getProducts();
    }

    getProductsById(id: number) {
        return this.productsRepository.getProductsById(id);
    }

    createProduct(product: any) {
        return this.productsRepository.createProduct(product);
    }

    updateProduct(id: number, updateProduct: any) {
        return this.productsRepository.updateProduct(id, updateProduct);
    }

    deleteProduct(id:number){
        return this.productsRepository.deleteProduct(id);
    }
}