import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus} from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

function validateRequest (request: Request): boolean {
    const authHeader = request.headers["authorization"];

    if(!authHeader) {
        throw new HttpException("Authorization header is missing", HttpStatus.UNAUTHORIZED);
    }

    if (!authHeader.startsWith("Basic ")) {
        throw new HttpException("Invalid authorization format", HttpStatus.UNAUTHORIZED);
    }

    const credentials = authHeader.slice(6); 

    const [email, password] = credentials.split(":");

    if (!email || !password) {
        throw new HttpException("Invalid credentials format", HttpStatus.UNAUTHORIZED);
    }

    return true;
}

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return validateRequest(request);
    }
}