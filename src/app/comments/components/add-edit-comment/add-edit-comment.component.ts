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
  @Input() editValue!: Comment;
  //@Input() parent_id!: number;
  @Input() bug_id!: number;
  @Output() cancelCommentEvent = new EventEmitter<boolean>();
  cancelComment = true;
  addEditCommentForm!: FormGroup;
  comment_id!: number;
  isAddMode!: boolean;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //private fb: FormBuilder, private commentsService: CommentsService, private router: Router, private route: ActivatedRoute
  }

  ngOnInit(): void {
    this.bug_id = 1;
    // this.route.params.subscribe((params: Params) => {
    //   this.bug_id = + params['bug_id'];
    //   this.comment_id = + params['comment_id'];
    // });
    // this.isAddMode = !this.comment_id;

    this.addEditCommentForm = this.fb.group({
      commenttext: ['', [Validators.required]],
    });
  }
  //get commenttext() { return this.addEditCommentForm.get('commenttext'); }

  onSubmit() {
    this.submitted = true;
    if (!this.addEditCommentForm.invalid) {
      this.addComment();
      if (this.isAddMode) {
        //this.addComment();
      } else {
        //this.updateComment();
      }
    }
  }
  private addComment() {
    this.commentsService
      .addComment({
        commenttext: this.addEditCommentForm.value.commenttext,
        account_id: 1,
        bug_id: this.bug_id,
        parent_id: null,
      })
      .subscribe((res) => {
        this.addEditCommentForm.reset();
        this.router.navigate(['bugs-routing/details', this.bug_id]);
        console.log(
          'bug_id from subscribe add-edit-comment-component',
          this.bug_id
        );
        console.log('res from subscribe add-edit-comment-component', res);
      });
  }
  // private updateComment() {
  //   this.commentsService.updateComment(this.bug_id, this.comment_id, this.addEditCommentForm.value).subscribe(res => {
  //     this.router.navigate(['comments']);
  //   });
  // }
  get commenttext() {
    return this.addEditCommentForm.get('commenttext');
  }
  public cancelCommentfun() {
    this.addEditCommentForm.reset();
    this.addEditCommentForm.get('commenttext')?.pristine == true;
    this.cancelComment = !this.cancelComment;
    this.cancelCommentEvent.emit(this.cancelComment);
    console.log('flag from add-edit-component: ', this.cancelComment);
  }
  updateForm() {
    this.addEditCommentForm.patchValue({
      commenttext: this.editValue.commenttext,
      byaccount: this.editValue.account_id,
      forbug: this.editValue.bug_id,
    });
  }
}
