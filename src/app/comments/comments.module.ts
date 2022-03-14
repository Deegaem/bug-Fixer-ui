import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentFormComponent
  ],
  imports: [
    SharedModule
  ], exports: [CommentsComponent]
})
export class CommentsModule { }
