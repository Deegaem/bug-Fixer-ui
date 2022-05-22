import { NgModule } from '@angular/core';
import { BugsComponent } from './bugs/bugs.component';
import { BugComponent } from './bug/bug.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { SharedModule } from '../shared/shared.module';
import { BugsRoutingModule } from './bugs-routing.module';
import { BugsRoutingComponent } from './bugs-routing.component';



@NgModule({
  declarations: [
    BugsComponent,
    BugComponent,
    BugFormComponent,
    BugsRoutingComponent
  ],
  imports: [
    SharedModule,
    BugsRoutingModule
  ],
  exports: [BugsRoutingComponent]
})
export class BugsModule { }
