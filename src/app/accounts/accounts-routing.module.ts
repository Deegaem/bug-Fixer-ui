import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsRoutingComponent } from './accounts-routing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'accounts-routing', component: AccountsRoutingComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
