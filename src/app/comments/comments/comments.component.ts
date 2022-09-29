import { Component, OnInit } from '@angular/core';
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

  //comments: Comment[] = [];
  comments: Comment[] = [{ "comment_id": 0, "comment_text": "1 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": 4, },
  { "comment_id": 0, "comment_text": "1 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": 0, },
  { "comment_id": 1, "comment_text": "2 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": 1, },
  { "comment_id": 2, "comment_text": "3 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 2, "parent_id": 1, },
  { "comment_id": 3, "comment_text": "4 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 4, "comment_text": "5 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 5, "comment_text": "6 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 6, "comment_text": "7 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 7, "comment_text": "8 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 8, "comment_text": "9 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 3, "parent_id": 2, },
  { "comment_id": 9, "comment_text": "10 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 1, "parent_id": 0, },
  { "comment_id": 10, "comment_text": "11 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 5, "bug_id": 1, "parent_id": 0, },
  { "comment_id": 0, "comment_text": "1 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et", "account_id": 4, "bug_id": 1, "parent_id": 4, },]
  account!: Account;
  bug_id!: number;
  constructor(private commentsService: CommentsService, private accountsService: AccountsService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.filterComments();


    // console.log("comments: ", comment)

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
  filterComments() {
    var group: any = {};
    this.comments.forEach(function (comment) {
      group[comment.parent_id] ||= [];
      group[comment.parent_id].push(comment);
    });
    console.log("groups: ", group);
  }

  showAccountInfo(account_id: number) {
    this.accountsService.getAccount(account_id).subscribe((account: Account) => {
      this.account = account;
      console.log("Account: ", account)
    });
  }
}
