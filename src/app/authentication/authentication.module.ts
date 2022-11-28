import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditAccountComponent } from './components/add-edit-account/add-edit-account.component';

@NgModule({
  declarations: [LoginComponent, AddEditAccountComponent],
  imports: [
    SharedModule
  ]
})
export class AuthenticationModule { }
