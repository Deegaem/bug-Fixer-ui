import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugComponent } from './bug/bug.component';
import { BugsRoutingComponent } from './bugs-routing.component';
import { BugsComponent } from './bugs/bugs.component';

const routes: Routes = [
  {
    path: 'bugs-routing', component: BugsRoutingComponent,
    children: [
      { path: 'bug', component: BugComponent },
      { path: 'bugs', component: BugsComponent }
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugsRoutingModule { }
