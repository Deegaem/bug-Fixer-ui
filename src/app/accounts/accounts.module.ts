import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsRoutingComponent } from './accounts-routing.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountsRoutingComponent
  ],
  imports: [
    SharedModule,
    AccountsRoutingModule
  ],
  exports: [AccountsRoutingComponent]
})
export class AccountsModule { }
