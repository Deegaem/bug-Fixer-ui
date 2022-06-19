import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  public commentForm!: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder, private commentsService: CommentsService, private router: Router) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      text: ['', [Validators.required]],
      byaccount: ['', [Validators.required]],
      forbug: ['', [Validators.required]]
    });

  }
  get text() { return this.commentForm.get('text'); }
  get byaccount() { return this.commentForm.get('byaccount'); }
  get forbug() { return this.commentForm.get('forbug'); }

  onSubmit(bug_id: number) {
    this.submitted = true;
    if (!this.commentForm.invalid) {
      this.commentsService.addComment(bug_id, this.commentForm.value).subscribe(res => {
        this.router.navigate(['bugs']);
      }
  }

  }
