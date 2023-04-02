import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/core/data-access/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: any;
  @Output() removeAccountEvent = new EventEmitter<Account>();

  constructor() { }

  ngOnInit(): void {
  }
  editAccount() {
  }
  removeAccount() {
  }

}
