import { NgModule } from '@angular/core';
import { BugsComponent } from './bugs/bugs.component';
import { BugComponent } from './bug/bug.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BugsComponent,
    BugComponent,
    BugFormComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [BugsComponent]
})
export class BugsModule { }
