import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";
import { FilesService } from "../files/files.service";
export declare class ProductsController {
    private readonly productsService;
    private readonly filesService;
    constructor(productsService: ProductsService, filesService: FilesService);
    getProducts(page?: string, limit?: string): Promise<import("./entities/products.entity").Product[]>;
    getProductById(id: string): Promise<import("./entities/products.entity").Product>;
    createProduct(product: CreateProductDto): Promise<{
        id: string;
    } | null>;
    seedProducts(): Promise<{
        message: string;
        result: import("./entities/products.entity").Product[];
    }>;
    updateProduct(id: string, updateProduct: UpdateProductDto): Promise<{
        id: string;
    } | null>;
    deleteProduct(id: string): Promise<{
        id: string | undefined;
    }>;
}
