export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    phone: string;
    country?: string;
    address?: string;
    city?: string
}
