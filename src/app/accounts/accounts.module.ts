import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsRoutingComponent } from './accounts-routing.component';
import { AddEditAccountComponent } from './components/add-edit-account/add-edit-account.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LoginComponent,
    AccountsRoutingComponent,
    AddEditAccountComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AccountsRoutingModule
  ],
  exports: [AccountsRoutingComponent]
})
export class AccountsModule { }
