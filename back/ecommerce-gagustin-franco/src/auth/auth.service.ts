import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    getAuthStatus() {
        return "User is authenticated";
    }
}