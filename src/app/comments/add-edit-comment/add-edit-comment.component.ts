import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-add-edit-comment',
  templateUrl: './add-edit-comment.component.html',
  styleUrls: ['./add-edit-comment.component.scss']
})
export class AddEditCommentComponent implements OnInit {

  addEditCommentForm!: FormGroup;
  bug_id!: number;
  comment_id!: number;
  isAddMode!: boolean;
  submitted = false;

  constructor(private fb: FormBuilder, private commentsService: CommentsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.bug_id = + params['bug_id'];
      this.comment_id = + params['comment_id'];
    });
    this.isAddMode = !this.comment_id;

    this.addEditCommentForm = this.fb.group({
      comment: ['', [Validators.required]],
      byaccount: ['', [Validators.required]],
      forbug: ['', [Validators.required]]
    });

  }
  get comment() { return this.addEditCommentForm.get('comment'); }

  onSubmit() {
    this.submitted = true;
    if (!this.addEditCommentForm.invalid) {
      if (this.isAddMode) {
        this.addComment();
      } else {
        this.updateComment();
      }
    }
  }
  private addComment() {
    this.commentsService.addComment(this.bug_id, this.addEditCommentForm.value).subscribe(res => {
      this.router.navigate(['comments']);
    });
  }
  private updateComment() {
    this.commentsService.updateComment(this.bug_id, this.comment_id, this.addEditCommentForm.value).subscribe(res => {
      this.router.navigate(['comments']);
    });
  }
}