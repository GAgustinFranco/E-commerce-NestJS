import { Injectable, CanActivate, ExecutionContext} from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

function validateRequest (request: Request) {
    const token = request.headers["token"];
    return token === "1234"; ///////ARMAR ESTO PARA QUE PIDA UN EMAIL Y CONTRASEÑA PARA LOGIN
}

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return validateRequest(request);
    }
}