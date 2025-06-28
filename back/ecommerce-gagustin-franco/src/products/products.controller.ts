import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Get(":id")
    getProductById(@Param("id") id: string){
        return this.productsService.getProductsById(Number(id));
    }
    
    @Post()
    createProduct(@Body() product: any) {
        return this.productsService.createProduct(product) 
    }
    
    @Put(":id")
    updateProduct(@Param("id") id: string, @Body() updateProduct: any) {
        return this.productsService.updateProduct(Number(id), updateProduct);
    }
    
    @Delete(":id")
    deleteProduct(@Param("id") id: string) {
        return this.productsService.deleteProduct(Number(id));
    }
}