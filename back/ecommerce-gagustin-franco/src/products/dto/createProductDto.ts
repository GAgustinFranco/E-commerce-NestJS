import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { Category } from '../../categories/entities/categories.entity';
import { OrderDetail } from '../../order-details/entities/order-details.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @ApiProperty({
        description:"Insert product name",
        example: "Samsung Flat 24 Ips"
    })
    name: string

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @ApiProperty({
        description:"Insert product description",
        example: "Minimalist design with 3-sided borderless display."
    })
    description: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description:"Insert product price",
        example: 1500
    })
    price: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description:"Insert product stock",
        example: "15"
    })
    stock: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description:"Insert product img url",
        example: "https://google.com/media/wysijyg/DV43X541520-45_3_.jpg"
    })
    imgUrl: string

    @ApiProperty({
        description:"Insert categorie",
        example: "UUID of the category to which the product belongs",
    })
    category?: Category;

    @ApiProperty({
        description:"OrderDetail",
    })
    orderDetails?: OrderDetail[];
}