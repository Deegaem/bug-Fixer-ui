import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
//import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        /*  if (this.authService.authenticated) {
             return true;
         }
         this.router.navigate(['login']); */
        return false;
    }
}