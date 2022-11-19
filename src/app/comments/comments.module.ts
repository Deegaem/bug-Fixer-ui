import { NgModule } from '@angular/core';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsRoutingComponent } from './comments-routing.component';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';


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
