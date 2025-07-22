import { Injectable, CanActivate, ExecutionContext,ForbiddenException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { Role } from "../auth/role.enum";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(
        context: ExecutionContext):  boolean | Promise<boolean> | Observable<boolean> {

            const requiredRoles = this.reflector.getAllAndOverride<Role[]>("roles", [
                context.getHandler(),
                context.getClass()
            ])

            const request = context.switchToHttp().getRequest();
            const user = request.user;
            const hasRole = () => 
                requiredRoles.includes(user?.isAdmin ? Role.Admin : Role.User);
            const valid = user && user.roles && hasRole();
            if (!valid) {
                throw new ForbiddenException("You do not have permission and are not allowed to access this route");
            }
            return valid;
    }
}
