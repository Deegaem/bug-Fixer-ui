import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { AccountListComponent } from './components/account-list/account-list.component';



@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountsModule { }
