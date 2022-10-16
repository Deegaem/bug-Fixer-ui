import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../Domain-Models/account';
import { AccountsService } from '../../services/accounts.service';
import { Comment } from '../../Domain-Models/comment';
import { CommentsService } from '../../services/comments.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { group } from '@angular/animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[] = [];


  account!: Account;
  bug_id!: number;
  constructor(private accountsService: AccountsService, private commentsService: CommentsService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // todo join observables
    /*  this.route.params.subscribe((params: Params) => {
       this.bug_id = + params['id'];
       this.commentsService.getComments(this.bug_id).subscribe((comments: Comment[]) => {
         this.comments = comments;
         console.log("comments: ", comments)
       });
     }); */
  }
  createComment() {
    this.router.navigate(['comments/comment-form']);
  }

  editComment(comment: Comment) {
    this.router.navigate(['comments/comment-form', comment.comment_id]);
  }

  removeComment(bug_id: number, comment_id: number) {
    this.commentsService.removeComment(bug_id, comment_id).subscribe(() => {
    });
  }

  showAccountInfo(account_id: number) {
    this.accountsService.getAccount(account_id).subscribe((account: Account) => {
      this.account = account;
      console.log("Account: ", account)
    });
  }
}
