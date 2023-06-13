import { NgModule } from '@angular/core';
import { AccountComponent } from './components/account/account.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { CommonModule } from '@angular/common';
import { Myresolver } from './data-access/myresolver';



@NgModule({
  declarations: [
    AccountComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ], providers: [Myresolver]
})
export class AccountsModule { }
