import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/accounts/data-access/account';
import { AccountsService } from 'src/app/core/data-access/accounts.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(
    private route: ActivatedRoute,
    private accountsService: AccountsService
  ) {}

  ngOnInit(): void {
    this.accounts = this.route.snapshot.data['stuff'];
  }

  removeAccountfun(_account: Account) {
    this.accounts = this.accounts.filter((account) => {
      return account.account_id != _account.account_id;
    });
  }
  private getAccounts() {
    this.accountsService.getAccounts().subscribe((res) => {
      this.accounts = res;
    });
  }
}
