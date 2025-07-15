import { IsNotEmpty, IsUUID } from 'class-validator';

export class ProductOrderDto {
    @IsNotEmpty()
    @IsUUID()
    id: string;
}