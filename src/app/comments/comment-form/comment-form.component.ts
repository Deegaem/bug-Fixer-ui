import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  public commentForm!: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder) { }

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
  
  onSubmit() {
    this.submitted = true;
    if (this.commentForm.invalid) {
      return
    }
  }

}
