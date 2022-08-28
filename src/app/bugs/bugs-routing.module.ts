import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditBugComponent } from './add-edit-bug/add-edit-bug.component';
import { BugComponent } from './bug/bug.component';
import { BugdetailsComponent } from './bugdetails/bugdetails.component';
import { BugsRoutingComponent } from './bugs-routing.component';
import { BugsComponent } from './bugs/bugs.component';

const routes: Routes = [
  {
    path: 'bugs-routing', component: BugsRoutingComponent,
    children: [
      { path: '', redirectTo: 'BugsComponent', pathMatch: 'full' },
      { path: 'bugs', component: BugsComponent },
      { path: 'bug', component: BugComponent },
      { path: 'details', component: BugdetailsComponent },
      { path: 'add', component: AddEditBugComponent },
      { path: 'edit/:id', component: AddEditBugComponent },
      { path: '**', redirectTo: 'BugsComponent', pathMatch: 'full' }
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugsRoutingModule { }
