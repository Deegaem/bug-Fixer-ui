import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from 'src/app/core/data-access/comments.service';
import { Comment } from '../../data-access/comment';
import { r3JitTypeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-add-edit-comment',
  templateUrl: './add-edit-comment.component.html',
  styleUrls: ['./add-edit-comment.component.scss'],
})
export class AddEditCommentComponent implements OnInit {
  @Input() isAddMode!: boolean;
  @Input() isreplyFlag!: boolean;
  @Input() comment!: Comment;
  //@Input() parent_id!: number;
  @Input() bug_id!: number;
  @Output() cancelCommentEvent = new EventEmitter<boolean>();
  cancelComment = true;
  addEditCommentForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addEditCommentForm = this.fb.group({
      commenttext: ['', [Validators.required]],
    });
    if (!this.isAddMode) {
      this.updateForm();
    }
    console.log('from add-edit-component comment:', this.comment);
    console.log('from add-edit-component isAddMode:', this.isAddMode);
    console.log('from add-edit-component isreplyFlag:', this.isreplyFlag);
    console.log('from add-edit-component bug_id:', this.bug_id);
    // this.bug_id = 1;
    // this.route.params.subscribe((params: Params) => {
    //   this.bug_id = + params['bug_id'];
    //   this.comment_id = + params['comment_id'];
    // });
    // this.isAddMode = !this.comment_id;
    //this.isreplyFlag = false;
  }
  //get commenttext() { return this.addEditCommentForm.get('commenttext'); }

  onSubmit() {
    this.submitted = true;
    if (!this.addEditCommentForm.invalid) {
      if (this.isAddMode) {
        this.addComment();
      } else {
        this.updateComment();
      }
      // this.addEditCommentForm.reset();
    }
  }
  private addComment() {
    if (this.isreplyFlag) {
      this.commentsService
        .addComment({
          commenttext: this.addEditCommentForm.value.commenttext,
          account_id: 1, //login ID
          bug_id: this.comment.bug_id,
          parent_id: this.comment.comment_id,
        })
        .subscribe((res) => {
          //Todo res is null
          // add res to comments array
          console.log('from add-edit-component add reply: res ');
          this.cancelCommentfun();
        });
    } else {
      this.commentsService
        .addComment({
          commenttext: this.addEditCommentForm.value.commenttext,
          account_id: 1, //loging ID
          bug_id: this.bug_id,
          parent_id: null,
        })
        .subscribe((res) => {
          //Todo res is null
          // add res to comments array

          //this.addEditCommentForm.pristine;
          console.log('reset from add-edit-component: ');
        });
    }
  }
  private updateComment() {
    this.commentsService
      .updateComment({
        comment_id: this.comment.comment_id,
        commenttext: this.addEditCommentForm.value.commenttext,
        account_id: this.comment.account_id,
        bug_id: this.comment.bug_id,
        parent_id: this.comment.parent_id,
      })
      .subscribe((res) => {
        this.cancelCommentfun();
        //this.router.navigate(['comments']);
      });
  }
  get commenttext() {
    return this.addEditCommentForm.get('commenttext');
  }
  public cancelCommentfun() {
    this.addEditCommentForm.reset();
    //this.addEditCommentForm.get('commenttext')?.pristine == true;
    this.cancelComment = !this.cancelComment;
    this.cancelCommentEvent.emit(this.cancelComment);
  }
  updateForm() {
    this.addEditCommentForm.patchValue({
      commenttext: this.comment.commenttext,
    });
  }
}
