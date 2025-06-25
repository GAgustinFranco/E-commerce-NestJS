import { Injectable } from "@nestjs/common";
import { get } from "http";

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
    
    getProducts(){
        return this.products;
    }
}