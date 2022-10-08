import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '../../Domain-Models/comment';
import { from } from 'rxjs';
import { CommentsService } from 'src/app/services/comments.service';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  childComments: Comment[] = [];
  constructor(private commentsService: CommentsService, private router: Router) { }

  ngOnInit(): void {

    if (typeof (this.comment.parent_id) !== 'number') {
      console.log("parent_id from comment:", this.comment.parent_id)
      this.childComments = this.commentsService.filterComments(this.comment.comment_id);
      console.log("child comments:", this.childComments)
    } else {
      console.log("parent_id from comment else:", this.comment.parent_id)
    }

  }
  edit() {
    this.router.navigate(['bugs-routing/edit']);
  }

  remove() {

  }

  reply() {

    this.router.navigate(['bugs-routing/details']);
  }

}
