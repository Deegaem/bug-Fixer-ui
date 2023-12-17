import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditAccountComponent } from './components/add-edit-account/add-edit-account.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AccountsService } from '../core/data-access/accounts.service';

@NgModule({
  declarations: [LoginComponent, AddEditAccountComponent],
  imports: [SharedModule, AuthenticationRoutingModule],
  providers: [AccountsService],
})
export class AuthenticationModule {}
