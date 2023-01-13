import { NgModule } from '@angular/core';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    AddEditCommentComponent,
    CommentComponent,
    CommentsComponent
  ],
  imports: [CoreModule]
  , exports: [CoreModule, AddEditCommentComponent, CommentComponent, CommentsComponent]
})
export class CommentsModule { }
