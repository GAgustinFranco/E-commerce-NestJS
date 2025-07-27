import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID, ArrayMinSize, IsArray } from "class-validator";

export interface ProductId {
    id: string;
}

export class CreateOrderDto {
    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({
            description:"Purchase order id",
            example: "UUID"
        })
    userId: string;

    @ArrayMinSize(1)
    @IsArray()
    @ApiProperty({
        description:"Array of products",
    })
    products: Array<ProductId>;
}