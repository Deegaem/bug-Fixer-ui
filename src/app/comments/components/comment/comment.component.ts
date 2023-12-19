import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Comment } from '../../data-access/comment';
import { CommentsService } from 'src/app/core/data-access/comments.service';
import { Account } from 'src/app/accounts/data-access/account';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  @Input() bug_id!: number;
  @Input() accountinfo!: Account;
  @Output() removeCommentEvent = new EventEmitter<Comment>();
  editValue!: Comment;
  childComments: Comment[] = [];
  replyflag: boolean = false;
  editflag: boolean = false;
  commentcomponentinstance: number = 0;
  constructor(private commentsService: CommentsService) {
    this.commentcomponentinstance++;
    console.log(
      'instance child comment component:',
      this.commentcomponentinstance
    );
  }

  ngOnInit(): void {
    // console.log("replyflag:", this.replyflag);

    /*  if (typeof (this.comment.parent_id) !== 'number') {
       console.log("parent_id from comment:", this.comment.parent_id)
       this.childComments = this.commentsService.filterComments(this.comment.comment_id);
       console.log("child comments:", this.childComments)
     } else {
       console.log("parent_id from comment else:", this.comment.parent_id)
     } */
    this.commentsService
      .getCommentsByBugId(this.bug_id, this.comment.comment_id)
      .subscribe((res: any[]) => {
        this.childComments = res;
        console.log('bug ID from child component:', this.bug_id);
        console.log('parent ID from child component:', this.comment.comment_id);
        console.log('childcomments from child component', this.childComments);
      });
  }
  edit() {
    this.editValue = this.comment;
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
    console.log('flag from comment component: ', flag);
  }
  public canceleditCommentfun(flag: any) {
    this.editflag = flag;
    console.log('flag from comment component: ', flag);
  }
}
