import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/core/data-access/account';
import { AccountsService } from 'src/app/core/data-access/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: any;
  @Output() removeAccountEvent = new EventEmitter<Account>();

  constructor(private accountsService: AccountsService, private router: Router) { }

  ngOnInit(): void {
  }
  editAccount(account_id: number) {
    this.router.navigate(['auth/edit', account_id]);
  }
  removeAccount(account_id: number) {
    this.accountsService.removeAccount(account_id).subscribe(res => {
      this.removeAccountEvent.emit(this.account);
    });
  }
}
