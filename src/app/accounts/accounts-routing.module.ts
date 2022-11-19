import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsRoutingComponent } from './accounts-routing.component';
import { AddEditAccountComponent } from './components/add-edit-account/add-edit-account.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'accounts-routing', component: AccountsRoutingComponent,
    children: [
      { path: '', redirectTo: 'AccountsRoutingComponent', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'add', component: AddEditAccountComponent },
      { path: 'edit/:id', component: AddEditAccountComponent },
      { path: '**', redirectTo: 'AccountsRoutingComponent', pathMatch: 'full' }
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
