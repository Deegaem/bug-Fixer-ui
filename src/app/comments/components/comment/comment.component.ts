import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../../data-access/comment';
import { from } from 'rxjs';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { CommentsService } from 'src/app/core/data-access/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  @Output() removeCommentEvent = new EventEmitter<Comment>();
  childComments: Comment[] = [];
  replyflag: boolean = false;
  editflag: boolean = false;
  constructor(private commentsService: CommentsService, private router: Router) { }

  ngOnInit(): void {
    console.log("replyflag:", this.replyflag);

    /*  if (typeof (this.comment.parent_id) !== 'number') {
       console.log("parent_id from comment:", this.comment.parent_id)
       this.childComments = this.commentsService.filterComments(this.comment.comment_id);
       console.log("child comments:", this.childComments)
     } else {
       console.log("parent_id from comment else:", this.comment.parent_id)
     } */
    this.childComments = this.commentsService.filterComments(this.comment.comment_id);

  }
  edit() {
    this.editflag = true;
  }

  remove() {
    this.removeCommentEvent.emit(this.comment);
  }

  reply() {
    this.replyflag = !this.replyflag;
  }
  public cancelreplyCommentfun(flag: any) {
    this.replyflag = flag;
    console.log("flag from comment component: ", flag);
  }
  public canceleditCommentfun(flag: any) {
    this.editflag = flag;
    console.log("flag from comment component: ", flag);
  }
}
