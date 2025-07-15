import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Query, UseGuards, ParseUUIDPipe } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./entities/products.entity";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";

@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
        @Get()
        @HttpCode(HttpStatus.OK)
        async getProducts(
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
        async getProductById(@Param("id", ParseUUIDPipe) id: string){
            return this.productsService.getProductsById(id);
        }
        
        @Post()
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.CREATED)
        async createProduct(@Body() product: CreateProductDto) {
            return this.productsService.createProduct(product) 
        }

        @Post('seeder')
        async seedProducts() {
            const data = require('../assets/act3');
            const result = await this.productsService.addProductsFromSeeder(data.productsP);
            return { message: 'Productos precargados', result };
        }
        
        @Put(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        async updateProduct(@Param("id", ParseUUIDPipe) id: string, @Body() updateProduct: UpdateProductDto) {
            return this.productsService.updateProduct(id, updateProduct);
        }
        
        @Delete(":id")
        @UseGuards(AuthGuard)
        @HttpCode(HttpStatus.OK)
        async deleteProduct(@Param("id", ParseUUIDPipe) id: string) {
            return this.productsService.deleteProduct(id);
        }
}