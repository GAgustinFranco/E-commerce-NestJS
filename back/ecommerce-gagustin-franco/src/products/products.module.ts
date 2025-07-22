import { Module, forwardRef } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { ProductsRepository } from "./products.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/products.entity";
import { CategoriesModule } from "../categories/categories.module";
import { FilesModule } from "../files/files.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        CategoriesModule,
        FilesModule,
        forwardRef(() => FilesModule)],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository],
    exports: [ProductsService, ProductsRepository]
})
export class ProductsModule {}