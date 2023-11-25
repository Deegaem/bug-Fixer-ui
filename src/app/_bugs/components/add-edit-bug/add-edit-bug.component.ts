import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Account } from 'src/app/accounts/data-access/account';
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
  statusArray = ["test1", "test2", "test3"];
  priorityArray = ["test1", "test2", "test3"];
  severityArray = ["test1", "test2", "test3"];
  assignedtoArray = [1, 2, 3];

  constructor(private fb: FormBuilder, private accountsService: AccountsService, private bugsService: BugsService, private router: Router, private route: ActivatedRoute) {
    this.addEditBugForm = this.fb.group({
      bugtitle: ['', [Validators.required]],
      assignedto: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      severity: ['', [Validators.required]],
      description: ['', [Validators.required]],
      expectedresult: ['', [Validators.required]],
      actualresult: ['', [Validators.required]],
      stepstoreproduce: ['', [Validators.required]],
      screenshoturl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
    });
    if (this.id) {
      this.bugsService.getBug(this.id).subscribe(res => {
        this.addEditBugForm.patchValue({
          bugtitle: res.bugtitle,
          description: res.description,
          assignedto: res.assignedto,
          status: res.status,
          priority: res.priority,
          severity: res.severity,
          stepstoreproduce: res.stepstoreproduce,
          expectedresult: res.expectedresult,
          actualresult: res.actualresult,
          screenshoturl: res.screenshoturl
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
    this.bugsService.addBug({
      bugtitle: this.addEditBugForm.value.bugtitle,
      account_id: this.addEditBugForm.value.assignedto,
      status: this.addEditBugForm.value.status,
      priority: this.addEditBugForm.value.priority,
      severity: this.addEditBugForm.value.severity,
      description: this.addEditBugForm.value.description,
      expectedresult: this.addEditBugForm.value.expectedresult,
      actualresult: this.addEditBugForm.value.actualresult,
      stepstoreproduce: this.addEditBugForm.value.stepstoreproduce,
      screenshoturl: this.addEditBugForm.value.screenshoturl
    }).subscribe(res => {
      this.addEditBugForm.reset();
      this.router.navigate(['bugs-routing/bugs']);
    });
  }

  private updateBug() {
    this.bugsService.updateBug({
      bug_id: this.id,
      bugtitle: this.addEditBugForm.value.bugtitle,
      account_id: this.addEditBugForm.value.assignedto,
      status: this.addEditBugForm.value.status,
      priority: this.addEditBugForm.value.priority,
      severity: this.addEditBugForm.value.severity,
      description: this.addEditBugForm.value.description,
      expectedresult: this.addEditBugForm.value.expectedresult,
      actualresult: this.addEditBugForm.value.actualresult,
      stepstoreproduce: this.addEditBugForm.value.stepstoreproduce,
      screenshoturl: this.addEditBugForm.value.screenshoturl
    }).subscribe(res => {
      this.addEditBugForm.reset();
      this.router.navigate(['bugs-routing/bugs']);
    });
  }

  private getAccounts() {
    this.accountsService.getAccounts().subscribe(res => {
      this.accounts = res;
    });
  }

  get bugtitle() { return this.addEditBugForm.get('bugtitle'); }
  get description() { return this.addEditBugForm.get('description'); }
  get assignedto() { return this.addEditBugForm.get('assignedto'); }
  get status() { return this.addEditBugForm.get('status'); }
  get priority() { return this.addEditBugForm.get('priority'); }
  get severity() { return this.addEditBugForm.get('severity'); }
  get stepstoreproduce() { return this.addEditBugForm.get('stepstoreproduce'); }
  get expectedresult() { return this.addEditBugForm.get('expectedresult'); }
  get actualresult() { return this.addEditBugForm.get('actualresult'); }
  get screenshoturl() { return this.addEditBugForm.get('screenshoturl'); }

  back() {
    this.router.navigate(['']);
  }
}