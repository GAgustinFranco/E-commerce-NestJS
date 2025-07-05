import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./entities/products.entity";

@Injectable()
export class ProductsRepository {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>
    ) {}
    
    private products = [
        {
            id:1,
            name: "licuadora",
            description: "string",
            price: 40000,
            stock: true,
            imgUrl: "string"
        },
        {
            id:2,
            name: "heladera",
            description: "string",
            price: 500000,
            stock: true,
            imgUrl: "string"
        },
        {
            id:3,
            name: "televisor",
            description: "string",
            price: 50000,
            stock: false,
            imgUrl: "string"
        }
    ];
    
    async getProducts(page: number, limit: number): Promise<Product[]> {
        return this.productsRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            relations: ['category'], 
            });
        }

    async getProductsById(id: number) {
        return this.products.find((product) => product.id === id)
    }

    async createProduct(product: Partial<Product>): Promise<Product | null> {
        const exists = await this.productsRepository.findOne({ where: { name: product.name } });
        if (exists) return null;
    
        const newProduct = this.productsRepository.create({
            ...product,
            imgUrl: product.imgUrl || undefined, // Usar el valor por defecto si no se proporciona
            orderDetails: [], // Inicializar como arreglo vacío
            });
            return this.productsRepository.save(newProduct);
        }

    async addProducts(products: any[], categoriesRepository: CategoriesRepository): Promise<Product[]> {
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
    

    async updateProduct(id: string, updatedProduct: Partial<Product>): Promise<Product | null> {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (!product) return null;
        
        await this.productsRepository.update(id, updatedProduct);
        return this.productsRepository.findOne({ where: { id }, relations: ['category'] });
    }

    async deleteProduct(id: number){
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return null;
    
        const deleted = this.products.splice(index, 1);
        return deleted[0];
    }
}