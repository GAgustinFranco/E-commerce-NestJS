import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class LoginUserDto {

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
            description:"Insert email",
            example: "robert@gmail.com"
        })   
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
            message: 'The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character. (!@#$%^&*).',
        })
    @ApiProperty({
        description:"Insert password",
        example: "Test!123467"
    })
    password: string
}