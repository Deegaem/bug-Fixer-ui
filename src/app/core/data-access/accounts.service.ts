import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../accounts/data-access/account';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}
  public getAccounts(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/accounts`).pipe(
      map((resp: any) => {
        var accounts: Array<any> = [];
        resp.map((account: any) => {
          accounts.push({
            account_id: account.account_id,
            fname: account.fname,
          });
        });
        return accounts;
      })
    );
  }
  public getAccount(account_id: number): Observable<Account> {
    return this.http
      .get<Account>(`http://localhost:8080/accounts/${account_id}`)
      .pipe(
        map((resp: Account) => {
          return resp;
        })
      );
  }
  public addAccount(account: Account): Observable<Account> {
    return this.http
      .post<Account>(`http://localhost:8080/accounts`, account)
      .pipe(
        map((resp: Account) => {
          return resp;
        })
      );
  }

  public updateAccount(account: Account): Observable<Account> {
    return this.http
      .put<Account>(`http://localhost:8080/accounts`, account)
      .pipe(
        map((resp: Account) => {
          return resp;
        })
      );
  }

  public removeAccount(account_id: number): Observable<{}> {
    return this.http.delete(`http://localhost:8080/accounts/${account_id}`);
  }
}
