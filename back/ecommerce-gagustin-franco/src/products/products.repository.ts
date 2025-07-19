import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./entities/products.entity";
import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";


@Injectable()
export class ProductsRepository {
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository: Repository<Product>,
    ) {}
    
    async getProducts(page: number, limit: number): Promise<Product[]> {
        return this.productsRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            relations: ['category'], 
            });
        }

    async getProductsById(id: string) {
        return this.productsRepository.findOne({
            where: {id},
            relations: ["category"]
        });
    }

    async createProduct(product: Partial<CreateProductDto>): Promise<Product | null> {
        const exists = await this.productsRepository.findOne({ where: { name: product.name } });
        if (exists) return null;
    
        const newProduct = this.productsRepository.create({
            ...product,
            imgUrl: product.imgUrl || undefined, 
            orderDetails: [], 
            });
            return this.productsRepository.save(newProduct);
        }

    async addProductsFromSeeder(products: any[], categoriesRepository: CategoriesRepository): Promise<Product[]> {
        const added: Product[] = [];
    
        for (const productData of products) {
            const exists = await this.productsRepository.findOne({ where: { name: productData.name } });
            if (!exists) {
                const category = await categoriesRepository.getCategories().then(categories =>
                categories.find(category => category.name === productData.category),
                );
                if (category) {
                const newProduct = this.productsRepository.create({
                    name: productData.name,
                    description: productData.description,
                    price: productData.price,
                    stock: productData.stock,
                    category,
                });
                await this.productsRepository.save(newProduct);
                added.push(newProduct);
                }
            }
            }
        
            return added;
        }
    
    async saveProduct(product: Product): Promise<Product> {
            return this.productsRepository.save(product);
        }

    async updateProduct(id: string, updatedProduct: Partial<UpdateProductDto>): Promise<Product | null> {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (!product) return null;
        
        await this.productsRepository.update(id, updatedProduct);
        return this.productsRepository.findOne({ where: { id }, relations: ['category'] });
    }

    async deleteProduct(id: string){
        const product = await this.productsRepository.findOne({ where: {id}});
        if (!product) return null;
    
        await this.productsRepository.remove(product);
        return product;
    }
}