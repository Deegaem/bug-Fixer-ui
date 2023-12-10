import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from 'src/app/core/data-access/comments.service';
import { Comment } from '../../data-access/comment';

@Component({
  selector: 'app-add-edit-comment',
  templateUrl: './add-edit-comment.component.html',
  styleUrls: ['./add-edit-comment.component.scss']
})
export class AddEditCommentComponent implements OnInit {
  @Input() editValue!: Comment;
  @Output() cancelCommentEvent = new EventEmitter<boolean>();
  cancelComment = true;
  addEditCommentForm!: FormGroup;
  bug_id!: number;
  comment_id!: number;
  isAddMode!: boolean;
  submitted = false;

  constructor(private fb: FormBuilder, private commentsService: CommentsService, private router: Router, private route: ActivatedRoute) { //private fb: FormBuilder, private commentsService: CommentsService, private router: Router, private route: ActivatedRoute
  }

  ngOnInit(): void {

    // this.route.params.subscribe((params: Params) => {
    //   this.bug_id = + params['bug_id'];
    //   this.comment_id = + params['comment_id'];
    // });
    // this.isAddMode = !this.comment_id;

    this.addEditCommentForm = this.fb.group({
      comment: ['', [Validators.required]],
      account_id: ['', [Validators.required]],
      bug_id: ['', [Validators.required]],
      parent_id: ['', [Validators.required]]
    });

  }
  //get comment() { return this.addEditCommentForm.get('comment'); }

  onSubmit() {
    this.submitted = true;
    if (!this.addEditCommentForm.invalid) {
      if (this.isAddMode) {
        //this.addComment();
      } else {
        //this.updateComment();
      }
    }
  }
  private addComment() {
     this.commentsService.addComment({
       commenttext: this.addEditCommentForm.value.comment,
       account_id: 1,
       bug_id: 3,
       parent_id: 2,
       created: undefined
     }).subscribe(res => {
       this.router.navigate(['comments']);
    });
  }
  // private updateComment() {
  //   this.commentsService.updateComment(this.bug_id, this.comment_id, this.addEditCommentForm.value).subscribe(res => {
  //     this.router.navigate(['comments']);
  //   });
  // }
  get comment() { return this.addEditCommentForm.get('comment'); }
  public cancelCommentfun() {
    this.addEditCommentForm.reset();
    this.addEditCommentForm.get('comment')?.pristine == true;
    this.cancelComment = !this.cancelComment;
    this.cancelCommentEvent.emit(this.cancelComment);
    console.log("flag from add-edit-component: ", this.cancelComment);

  }
  updateForm() {
    this.addEditCommentForm.patchValue({
      comment: this.editValue.commenttext,
      byaccount: this.editValue.account_id,
      forbug: this.editValue.bug_id
    });
  }
}