import { NgModule } from '@angular/core';
import { AccountComponent } from './components/account/account.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
