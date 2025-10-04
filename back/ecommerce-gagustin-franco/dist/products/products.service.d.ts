import { ProductsRepository } from "./products.repository";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./entities/products.entity";
import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";
export declare class ProductsService {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: ProductsRepository, categoriesRepository: CategoriesRepository);
    getProducts(page?: number, limit?: number): Promise<Product[]>;
    getProductsById(id: string): Promise<Product>;
    createProduct(product: Partial<CreateProductDto>): Promise<{
        id: string;
    } | null>;
    addProductsFromSeeder(products: any[]): Promise<Product[]>;
    updateProduct(id: string, updateProduct: Partial<UpdateProductDto>): Promise<{
        id: string;
    } | null>;
    deleteProduct(id: string): Promise<{
        id: string | undefined;
    }>;
}
