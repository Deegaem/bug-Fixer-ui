import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsRoutingComponent } from './accounts-routing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'accounts-routing', component: AccountsRoutingComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
