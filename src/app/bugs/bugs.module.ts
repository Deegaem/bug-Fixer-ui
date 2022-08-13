import { NgModule } from '@angular/core';
import { BugsComponent } from './bugs/bugs.component';
import { BugComponent } from './bug/bug.component';
import { SharedModule } from '../shared/shared.module';
import { BugsRoutingModule } from './bugs-routing.module';
import { BugsRoutingComponent } from './bugs-routing.component';
import { AddEditBugComponent } from './add-edit-bug/add-edit-bug.component';



@NgModule({
  declarations: [
    BugsComponent,
    BugComponent,
    BugsRoutingComponent,
    AddEditBugComponent
  ],
  imports: [
    SharedModule,
    BugsRoutingModule
  ],
  exports: [BugsRoutingComponent]
})
export class BugsModule { }
