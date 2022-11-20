import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsRoutingComponent } from './accounts-routing.component';
import { AddEditAccountComponent } from './components/add-edit-account/add-edit-account.component';



@NgModule({
  declarations: [
    AccountsRoutingComponent,
    AddEditAccountComponent,
  ],
  imports: [
    SharedModule,
    AccountsRoutingModule
  ],
  exports: [AccountsRoutingComponent]
})
export class AccountsModule { }
