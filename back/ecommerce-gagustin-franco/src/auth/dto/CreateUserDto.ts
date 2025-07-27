import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, IsNumber, Matches, IsOptional, IsEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @ApiProperty({
        description:"Insert name",
        example: "Robert"
    })
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        description:"Insert email",
        example: "robert@gmail.com"
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(100)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character. (!@#$%^&*).',
    })
    @ApiProperty({
        description:"Insert password",
        example: "Test!123467"
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(100)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character. (!@#$%^&*).',
    })
    @ApiProperty({
        description:"Confirm password",
        example: "Test!123467"
    })
    confirmPassword: string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description:"Insert phone number",
        example: "325879403"
    })
    phone: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    @ApiProperty({
        description:"Insert country",
        example: "Rumany"
    })
    country?: string;

    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @IsOptional()
    @ApiProperty({
        description:"Insert address",
        example: "San Martín 2349"
    })
    address?: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    @ApiProperty({
        description:"Insert city",
        example: "Esperanza"
    })
    city?: string

    @IsEmpty()
    @ApiProperty({
        description:"Insert name",
        default: false
    })
    isAdmin: boolean
}
