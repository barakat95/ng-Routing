import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    return this.authService.isAuthenticated().then((authenticated: Boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(["/"]);
        return false;
      }
    });
    throw new Error("Method not implemented.");
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated().then((authenticated: Boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(["/"]);
        return false;
      }
    });
  }
}
