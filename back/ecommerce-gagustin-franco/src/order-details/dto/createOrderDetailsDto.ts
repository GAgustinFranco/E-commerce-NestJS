import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsUUID } from "class-validator";

export class CreateOrderDetailDto {

    @IsNotEmpty() 
    @IsNumber()
    @ApiProperty({
                description:"Product price",
                example: "1500"
            })
    price: number;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({
                description:"Order UUID",
                example: "UUID"
            })
    orderId: string;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({
                description:"Products UUID",
                example: "UUID"
            })
    productsIds: string[];
}