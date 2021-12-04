import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtPresentGuard implements CanActivate {

    constructor(private authService:AuthService) {}

     canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization.replace("Bearer ", "");
        const user = request.user;
        const result = this.authService.validateTokenToUsername(token, user);
        return result;
    }

}