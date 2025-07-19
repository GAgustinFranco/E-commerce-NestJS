import { IsNotEmpty, IsUUID, ArrayMinSize, IsArray } from "class-validator";

export interface ProductId {
    id: string;
}

export class CreateOrderDto {
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @ArrayMinSize(1)
    @IsArray()
    products: Array<ProductId>;
}