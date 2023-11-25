import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
//import { Credential } from '../Domain-Models/credential';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Account } from 'src/app/accounts/data-access/account';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //private BASE_URL = 'http://localhost:8080/ims-users/resources';
    //private user: Account;
    //private jwtHelper: JwtHelperService,
    constructor(private http: HttpClient, private router: Router) { }

    public get authenticated(): boolean {
        /* const token = this.jwtHelper.tokenGetter();
        if (token) {
            return !this.jwtHelper.isTokenExpired(token);
        } */
        return true;
    }

    public login() {
        /*  let url: string = `${this.BASE_URL}/users/authenticate`;
         return this.http.post(url, userCreds,
             { responseType: 'text' }
         ).subscribe(
             tokenResult => {
                 let result = JSON.parse(tokenResult);
                 localStorage.setItem('token', result.token);
                 localStorage.setItem('id', result.id);
                 localStorage.setItem('username', userCreds.username);
 
                 this.user = new Account();
                 this.user.id = result.id;
                 this.user.name = userCreds.username;
                 this.router.navigate(['issues']);
             },
             error => {
                 console.log('login failed', error);
             }); */
        this.router.navigate(['bugs-routing/bugs']);
    }
    public logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('username');

        this.router.navigate(['']);
    }

    /*     public get currentUser(): User {
            if (this.user && this.user.id) {
                return this.user;
            }
    
            this.user = new User();
            this.user.id = Number(localStorage.getItem('id'));
            this.user.name = localStorage.getItem('username');
    
            return this.user;
        } */

}
