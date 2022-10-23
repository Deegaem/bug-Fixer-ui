import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsRoutingComponent } from './comments-routing.component';
import { AddEditCommentComponent } from './add-edit-comment/add-edit-comment.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentsRoutingComponent,
    AddEditCommentComponent
  ],
  imports: [
    SharedModule,
    CommentsRoutingModule
  ], exports: [CommentsRoutingComponent, CommentsComponent, AddEditCommentComponent]
})
export class CommentsModule { }
