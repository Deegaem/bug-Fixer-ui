import { Component, OnInit } from '@angular/core';
import { Account } from '../../Domain-Models/account';
import { AccountsService } from '../../services/accounts.service';
import { Comment } from '../../Domain-Models/comment';
import { CommentsService } from '../../services/comments.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];
  filteredIComments: any[] = [];
  commentstest: any[] = [{ "account": "John", "comment_text": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et" },
  { "comment_id": 1, "parent_id": 1, "account": "John", "comment_text": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et" },
  { "comment_id": 2, "parent_id": 2, "account": "John", "comment_text": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et" },
  { "comment_id": 2, "parent_id": 2, "account": "John", "comment_text": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et" },
  { "comment_id": 1, "parent_id": 1, "account": "John", "comment_text": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et" }
  ]
  account!: Account;
  bug_id!: number;
  constructor(private commentsService: CommentsService, private accountsService: AccountsService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.filterComments(1);
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
  filterComments(comment_id: number) {
    this.filteredIComments = this.commentstest.filter((item) => {
      return item.parent_id == comment_id;
    })
  }

  showAccountInfo(account_id: number) {
    this.accountsService.getAccount(account_id).subscribe((account: Account) => {
      this.account = account;
      console.log("Account: ", account)
    });
  }
}
