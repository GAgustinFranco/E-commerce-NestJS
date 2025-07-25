import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, IsNumber, Matches, IsOptional, IsEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(100)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character. (!@#$%^&*).',
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(100)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character. (!@#$%^&*).',
    })
    confirmPassword: string;
    
    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    country?: string;

    @IsString()
    @MinLength(3)
    @MaxLength(80)
    @IsOptional()
    address?: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsOptional()
    city?: string

    @IsEmpty()
    isAdmin: boolean
}
