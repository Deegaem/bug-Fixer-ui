import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnInit {

  public bugForm!: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bugForm = this.fb.group({
      bugTitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      assignedtoaccount: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      severity: ['', [Validators.required]],
      stepsToReproduce: ['', [Validators.required]],
      expectedAndActualResult: ['', [Validators.required]],
      screenShotUrl: ['', [Validators.required]]
    });

  }
  get bugTitle() { return this.bugForm.get('bugTitle'); }
  get description() { return this.bugForm.get('description'); }
  get assignedtoaccount() { return this.bugForm.get('assignedtoaccount'); }
  get status() { return this.bugForm.get('status'); }
  get priority() { return this.bugForm.get('priority'); }
  get severity() { return this.bugForm.get('severity'); }
  get stepsToReproduce() { return this.bugForm.get('stepsToReproduce'); }
  get expectedAndActualResult() { return this.bugForm.get('expectedAndActualResult'); }
  get screenShotUrl() { return this.bugForm.get('screenShotUrl'); }
  onSubmit() {
    this.submitted = true;
    if (this.bugForm.invalid) {
      return
    }

  }
}
