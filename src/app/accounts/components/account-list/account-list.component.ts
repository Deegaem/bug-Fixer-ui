import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/core/data-access/account';
import { AccountsService } from 'src/app/core/data-access/accounts.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.getAccounts()
  }

  removeAccountfun(_account: Account) {
    this.accounts = this.accounts.filter((account) => {
      return account.account_id != _account.account_id;
    });
  }
  private getAccounts() {
    this.accountsService.getAccounts().subscribe(res => {
      this.accounts = res;
    });
  }

}
