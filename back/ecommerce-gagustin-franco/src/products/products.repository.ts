import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsRepository {
    
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
    
    async getProducts(){
        return this.products;
    }

    async getProductsById(id: number) {
        return this.products.find((product) => product.id === id)
    }

    createProduct(product: any) {
        const newUser = {
            id: this.products.length + 1,
            ...product
        };
        this.products.push(newUser);
        return newUser;
    }

    async updateProduct(id: number, updatedProduct: any) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return null;
    
        this.products[index] = { ...this.products[index], ...updatedProduct };
        return this.products[index];
    }

    async deleteProduct(id: number){
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) return null;
    
        const deleted = this.products.splice(index, 1);
        return deleted[0];
    }
}