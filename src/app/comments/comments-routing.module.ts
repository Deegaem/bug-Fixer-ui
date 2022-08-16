import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { CommentsRoutingComponent } from './comments-routing.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path: 'comments-routing', component: CommentsRoutingComponent,
    children: [
      { path: 'comment', component: CommentComponent },
      { path: 'comments', component: CommentsComponent }
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
