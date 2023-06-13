import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { Myresolver } from './data-access/myresolver';

const routes: Routes = [
  {
    path: 'account-list', component: AccountListComponent,
    resolve: { stuff: Myresolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
