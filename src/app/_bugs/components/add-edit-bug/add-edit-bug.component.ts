import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Account } from 'src/app/core/data-access/account';
import { AccountsService } from 'src/app/core/data-access/accounts.service';
import { BugsService } from 'src/app/core/data-access/bugs.service';



@Component({
  selector: 'app-add-edit-bug',
  templateUrl: './add-edit-bug.component.html',
  styleUrls: ['./add-edit-bug.component.scss']
})
export class AddEditBugComponent implements OnInit {

  addEditBugForm!: FormGroup;
  accounts: Account[] = [];
  id!: number;
  isAddMode = true;
  submitted = false;

  constructor(private fb: FormBuilder, private accountsService: AccountsService, private bugsService: BugsService, private router: Router, private route: ActivatedRoute,) {
    this.addEditBugForm = this.fb.group({
      bugTitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
      assignedtoaccount: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      severity: ['', [Validators.required]],
      stepsToReproduce: ['', [Validators.required]],
      expectedResult: ['', [Validators.required]],
      actualResult: ['', [Validators.required]],
      screenShotUrl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
    });
    if (this.id) {
      this.bugsService.getBug(this.id).subscribe(res => {
        this.addEditBugForm.patchValue({
          bugTitle: res.bugTitle,
          description: res.description,
          assignedtoaccount: res.assignedtoaccount,
          status: res.status,
          priority: res.priority,
          severity: res.severity,
          stepsToReproduce: res.stepsToReproduce,
          expectedResult: res.expectedResult,
          actualResult: res.actualResult,
          screenShotUrl: res.screenShotUrl
        })
      });
      this.isAddMode = false;
    }
    //this.getAccounts();

  }

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
      this.addEditBugForm.reset();
      this.router.navigate(['bugs']);
    });
  }

  private updateBug() {
    this.bugsService.updateBug({
      bug_id: this.id,
      bugTitle: this.addEditBugForm.value.bugTitle,
      description: this.addEditBugForm.value.description,
      assignedtoaccount: this.addEditBugForm.value.assignedtoaccount,
      status: this.addEditBugForm.value.status,
      priority: this.addEditBugForm.value.priority,
      severity: this.addEditBugForm.value.severity,
      stepsToReproduce: this.addEditBugForm.value.stepsToReproduce,
      expectedResult: this.addEditBugForm.value.expectedResult,
      actualResult: this.addEditBugForm.value.actualResult,
      screenShotUrl: this.addEditBugForm.value.screenShotUrl
    }).subscribe(res => {
      this.addEditBugForm.reset();
      this.router.navigate(['bugs']);
    });
  }

  private getAccounts() {
    this.accountsService.getAccounts().subscribe(res => {
      this.accounts = res;
    });
  }

  get bugTitle() { return this.addEditBugForm.get('bugTitle'); }
  get description() { return this.addEditBugForm.get('description'); }
  get assignedtoaccount() { return this.addEditBugForm.get('assignedtoaccount'); }
  get status() { return this.addEditBugForm.get('status'); }
  get priority() { return this.addEditBugForm.get('priority'); }
  get severity() { return this.addEditBugForm.get('severity'); }
  get stepsToReproduce() { return this.addEditBugForm.get('stepsToReproduce'); }
  get expectedResult() { return this.addEditBugForm.get('expectedResult'); }
  get actualResult() { return this.addEditBugForm.get('actualResult'); }
  get screenShotUrl() { return this.addEditBugForm.get('screenShotUrl'); }

  back() {
    this.router.navigate(['']);
  }
}