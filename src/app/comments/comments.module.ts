import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsRoutingComponent } from './comments-routing.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,
    CommentsRoutingComponent
  ],
  imports: [
    SharedModule,
    CommentsRoutingModule
  ], exports: [CommentsRoutingComponent]
})
export class CommentsModule { }
