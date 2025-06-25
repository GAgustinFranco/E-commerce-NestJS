import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
    private users = [
        {
            id: 1,
            email: "string",
            name: "Martín",
            password: "string",
            address: "string",
            phone: "string",
            country: "string",
            city: "string"
        },
        {
            id: 2,
            email: "string",
            name: "Joaquín",
            password: "string",
            address: "string",
            phone: "string",
            country: "string",
            city: "string"
        },
        {
            id: 3,
            email: "string",
            name: "Celene",
            password: "string",
            address: "string",
            phone: "string",
            country: "string",
            city: "string"
        }
    ];

    getUsers(){
        return this.users;
    }
}