import { NgModule } from '@angular/core';
import { BugsComponent } from './components/bugs/bugs.component';
import { BugComponent } from './components/bug/bug.component';
import { BugsRoutingModule } from './bugs-routing.module';
import { AddEditBugComponent } from './components/add-edit-bug/add-edit-bug.component';
import { BugdetailsComponent } from './components/bugdetails/bugdetails.component';
import { BugScreenShotComponent } from './components/bug-screen-shot/bug-screen-shot.component';
import { CommentsModule } from '../comments/comments.module';
import { AuthService } from '../authentication/data-access/auth.service';
import { AuthGuardService } from '../authentication/data-access/auth.guard.service';



@NgModule({
  declarations: [
    BugsComponent,
    BugComponent,
    AddEditBugComponent,
    BugdetailsComponent,
    BugScreenShotComponent
  ],
  imports: [
    BugsRoutingModule,
    CommentsModule
  ],
  providers: [AuthService, AuthGuardService],
  exports: []
})
export class BugsModule { }
