import { Repository } from "typeorm";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./entities/products.entity";
import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";
export declare class ProductsRepository {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    getProducts(page: number, limit: number): Promise<Product[]>;
    getProductsById(id: string): Promise<Product>;
    createProduct(product: Partial<CreateProductDto>): Promise<Product | null>;
    addProductsFromSeeder(products: any[], categoriesRepository: CategoriesRepository): Promise<Product[]>;
    saveProduct(product: Product): Promise<Product>;
    updateProduct(id: string, updatedProduct: Partial<UpdateProductDto>): Promise<Product | null>;
    deleteProduct(id: string): Promise<Product | null>;
}
