import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../Domain-Models/account';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';

@Injectable()
export class AccountsService {

    constructor(private http: HttpClient) { }
    public getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(`http://localhost:8080/accounts`)
            .pipe(map((resp: Account[]) => { return resp })
            );
    }

    public addAccount(account_id: number, account: Account): Observable<Account> {
        return this.http.post<Account>(`http://localhost:8080/accounts/${account_id}`, account)
            .pipe(map((resp: Account) => { return resp })
            );
    }

    public updateAccount(account_id: number, account: Account): Observable<Account> {
        return this.http.put<Account>(`http://localhost:8080/accounts/${account_id}`, account)
            .pipe(map((resp: Account) => { return resp })
            );
    }

    public removeAccount(account_id: number): Observable<{}> {
        return this.http.delete(`http://localhost:8080/accounts/${account_id}`)
    }
}