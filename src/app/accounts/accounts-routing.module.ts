import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { Accountsresolver } from './data-access/accountsresolver';

const routes: Routes = [
  {
    path: 'account-list',
    component: AccountListComponent,
    resolve: { stuff: Accountsresolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
