import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BugsService } from '../../data-access/bugs.service';


@Component({
  selector: 'app-add-edit-bug',
  templateUrl: './add-edit-bug.component.html',
  styleUrls: ['./add-edit-bug.component.scss']
})
export class AddEditBugComponent implements OnInit {

  addEditBugForm!: FormGroup;
  id!: number;
  isAddMode!: boolean;
  submitted = false;

  constructor(private fb: FormBuilder, private bugsService: BugsService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
    });
    this.isAddMode = !this.id;
    this.addEditBugForm = this.fb.group({
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
  get bugTitle() { return this.addEditBugForm.get('bugTitle'); }
  get description() { return this.addEditBugForm.get('description'); }
  get assignedtoaccount() { return this.addEditBugForm.get('assignedtoaccount'); }
  get status() { return this.addEditBugForm.get('status'); }
  get priority() { return this.addEditBugForm.get('priority'); }
  get severity() { return this.addEditBugForm.get('severity'); }
  get stepsToReproduce() { return this.addEditBugForm.get('stepsToReproduce'); }
  get expectedAndActualResult() { return this.addEditBugForm.get('expectedAndActualResult'); }
  get screenShotUrl() { return this.addEditBugForm.get('screenShotUrl'); }

  onSubmit() {
    this.submitted = true;
    if (!this.addEditBugForm.invalid) {
      if (this.isAddMode) {
        this.addBug();
      } else {
        this.updateBug();
      }
    }
  }
  private addBug() {
    this.bugsService.addBug(this.addEditBugForm.value).subscribe(res => {
      this.router.navigate(['bugs']);
    });
  }
  private updateBug() {
    this.bugsService.updateBug(this.id, this.addEditBugForm.value).subscribe(res => {
      this.router.navigate(['bugs']);
    });
  }
  back() {
    this.router.navigate(['']);
  }
}