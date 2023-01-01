import { NgModule } from '@angular/core';
import { BugsComponent } from './components/bugs/bugs.component';
import { BugComponent } from './components/bug/bug.component';
import { SharedModule } from '../shared/shared.module';
import { BugsRoutingModule } from './bugs-routing.module';
import { AddEditBugComponent } from './components/add-edit-bug/add-edit-bug.component';
import { BugdetailsComponent } from './components/bugdetails/bugdetails.component';
import { BugScreenShotComponent } from './components/bug-screen-shot/bug-screen-shot.component';
import { CommentsModule } from '../comments/comments.module';



@NgModule({
  declarations: [
    BugsComponent,
    BugComponent,
    AddEditBugComponent,
    BugdetailsComponent,
    BugScreenShotComponent
  ],
  imports: [
    SharedModule,
    BugsRoutingModule,
    CommentsModule
  ],
  exports: []
})
export class BugsModule { }
