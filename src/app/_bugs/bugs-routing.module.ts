import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBugComponent } from './components/add-edit-bug/add-edit-bug.component';
import { BugScreenShotComponent } from './components/bug-screen-shot/bug-screen-shot.component';
import { BugdetailsComponent } from './components/bugdetails/bugdetails.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { AuthGuardService } from '../authentication/data-access/auth.guard.service';
import { Bugsresolver } from './data-access/bugsresolver';

const routes: Routes = [
  { path: 'bugs', component: BugsComponent, canActivate: [AuthGuardService], resolve: { bugs: Bugsresolver } },
  { path: 'details/:id', component: BugdetailsComponent },
  { path: 'add', component: AddEditBugComponent },
  { path: 'edit/:id', component: AddEditBugComponent },
  { path: 'bug-screen-shot', component: BugScreenShotComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugsRoutingModule { }
