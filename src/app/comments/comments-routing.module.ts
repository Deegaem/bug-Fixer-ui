import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsRoutingComponent } from './comments-routing.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  {
    path: 'comments-routing', component: CommentsRoutingComponent,
    children: [
      { path: '', redirectTo: 'CommentsComponent', pathMatch: 'full' },
      { path: 'comments', component: CommentsComponent },
      { path: 'comment', component: CommentComponent },
      { path: 'add', component: AddEditCommentComponent },
      { path: 'edit/:id', component: AddEditCommentComponent },
      { path: '**', redirectTo: 'CommentsComponent', pathMatch: 'full' }
    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
