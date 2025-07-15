import { IsNotEmpty, IsUUID, ArrayMinSize, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProductOrderDto } from "./ProductOrder.dto";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @ValidateNested({ each: true})
    @Type(() => ProductOrderDto)
    @ArrayMinSize(1)
    products: ProductOrderDto[];
}