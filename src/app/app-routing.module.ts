import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component'



const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'bugs-routing', loadChildren: () => import('./_bugs/bugs.module').then(m => m.BugsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
