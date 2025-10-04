import { OnModuleInit } from '@nestjs/common';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './products/products.service';
export declare class AppModule implements OnModuleInit {
    private categoriesService;
    private productsService;
    constructor(categoriesService: CategoriesService, productsService: ProductsService);
    onModuleInit(): Promise<void>;
}
