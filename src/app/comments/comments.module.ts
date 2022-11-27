import { NgModule } from '@angular/core';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    AddEditCommentComponent
  ],
  imports: [SharedModule]
  , exports: [CommentsComponent, CommentComponent, AddEditCommentComponent]
})
export class CommentsModule { }
