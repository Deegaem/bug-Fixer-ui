import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBugComponent } from './components/add-edit-bug/add-edit-bug.component';
import { BugScreenShotComponent } from './components/bug-screen-shot/bug-screen-shot.component';
import { BugdetailsComponent } from './components/bugdetails/bugdetails.component';
import { BugsComponent } from './components/bugs/bugs.component';

const routes: Routes = [
  { path: '', redirectTo: 'BugsComponent', pathMatch: 'full' },
  { path: 'bugs', component: BugsComponent },
  { path: 'details', component: BugdetailsComponent },
  { path: 'add', component: AddEditBugComponent },
  { path: 'edit/:id', component: AddEditBugComponent },
  { path: 'bug-screen-shot', component: BugScreenShotComponent },
  { path: '**', redirectTo: 'BugsComponent', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugsRoutingModule { }
