import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AccountsService } from 'src/app/core/data-access/accounts.service';
import { Account } from 'src/app/accounts/data-access/account';
import { Observable } from "rxjs";

@Injectable()
export class Accountsresolver implements Resolve<Account[]>{
    constructor(private accountsService: AccountsService) { }
    resolve(): Observable<Account[]> {
        return this.accountsService.getAccounts();
    }
}