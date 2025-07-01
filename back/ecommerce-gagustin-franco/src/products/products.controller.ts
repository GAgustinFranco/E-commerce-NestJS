import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Query, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.interface";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
        @Get()
        @HttpCode(HttpStatus.OK)
        getProducts(
            @Query("page") page?: string,
            @Query("limit") limit?:string
        ) {
            return this.productsService.getProducts(
                Number(page) || 1,
                Number(limit) || 5
            );
        }

        @Get(":id")
        @HttpCode(HttpStatus.OK)
        getProductById(@Param("id") id: string){
            return this.productsService.getProductsById(Number(id));
        }
        
        @Post()
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.CREATED)
        createProduct(@Body() product: Product) {
            return this.productsService.createProduct(product) 
        }
        
        @Put(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        updateProduct(@Param("id") id: string, @Body() updateProduct: Product) {
            return this.productsService.updateProduct(Number(id), updateProduct);
        }
        
        @Delete(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        deleteProduct(@Param("id") id: string) {
            return this.productsService.deleteProduct(Number(id));
        }
}