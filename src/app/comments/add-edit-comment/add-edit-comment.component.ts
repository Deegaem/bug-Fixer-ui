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
  id!: number;
  isAddMode!: boolean;
  submitted = false;

  constructor(private fb: FormBuilder, private commentsService: CommentsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
    });
    this.isAddMode = !this.id;

    this.addEditCommentForm = this.fb.group({
      text: ['', [Validators.required]],
      byaccount: ['', [Validators.required]],
      forbug: ['', [Validators.required]]
    });

  }
  get text() { return this.addEditCommentForm.get('text'); }
  get byaccount() { return this.addEditCommentForm.get('byaccount'); }
  get forbug() { return this.addEditCommentForm.get('forbug'); }

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
    this.commentsService.addComment(this.id, this.addEditCommentForm.value).subscribe(res => {
      this.router.navigate(['comments']);
    });
  }
  private updateComment() { }
}