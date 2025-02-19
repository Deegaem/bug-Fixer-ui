import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../../accounts/data-access/account';
import { AccountsService } from '../../../core/data-access/accounts.service';
import { Comment } from '../../data-access/comment';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/core/data-access/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: any[] = [];
  accountinfo!: Account;
  @Input() bug_id!: number;
  commentcomponentinstance: number = 0;
  constructor(
    private accountsService: AccountsService,
    private commentsService: CommentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.commentcomponentinstance++;
    console.log(
      'instance root comment component instance:',
      this.commentcomponentinstance++
    );
  }

  ngOnInit(): void {
    // todo join observables
    /*  this.route.params.subscribe((params: Params) => {
       this.bug_id = + params['id'];
       this.commentsService.getComments(this.bug_id).subscribe((comments: Comment[]) => {
         this.comments = comments;
         console.log("comments: ", comments)
       });
     }); */
    console.log('Rootcomments From comments component: ', this.comments);
  }

  removeComment(comment_id: number) {
    this.commentsService.removeCommentById(comment_id).subscribe(() => {});
  }

  removeCommentfun(comment: any) {
    console.log('comment from comments component: ', comment);
  }
  showAccountInfo(account_id: number) {
    // todo take it from the localstorge
    this.accountsService
      .getAccount(account_id)
      .subscribe((account: Account) => {
        this.accountinfo = account;
        console.log('Account: ', account);
      });
  }
}
