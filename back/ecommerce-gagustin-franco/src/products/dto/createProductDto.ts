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
        example: "Samsung TV"
    })
    name: string

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @ApiProperty({
        description:"Insert product description",
        example: "You can play content (photos, music, and videos) stored on external devices such as smartphones, tablets, or flash drives on your TV by connecting them via USB ports. It also has HDMI inputs so you can connect audio and video players or game consoles."
    })
    description: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description:"Insert product price",
        example: "1500"
    })
    price: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description:"Insert product stock",
        example: "10"
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
        example: "TV"
    })
    category?: Category;

    @ApiProperty({
        description:"OrderDetail",
    })
    orderDetails?: OrderDetail[];
}