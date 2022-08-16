import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsRoutingComponent } from './accounts-routing.component';
import { AddEditAccountComponent } from './add-edit-account/add-edit-account.component';



@NgModule({
  declarations: [
    LoginComponent,
    AccountsRoutingComponent,
    AddEditAccountComponent
  ],
  imports: [
    SharedModule,
    AccountsRoutingModule
  ],
  exports: [AccountsRoutingComponent]
})
export class AccountsModule { }
