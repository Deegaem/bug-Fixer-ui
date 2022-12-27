import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AccountsService } from 'src/app/core/data-access/accounts.service';



@Component({
  selector: 'app-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrls: ['./add-edit-account.component.scss']
})

export class AddEditAccountComponent implements OnInit {


  addEditAccountform!: FormGroup;
  id!: number;
  isAddMode!: boolean;
  submitted = false;

  constructor(private fb: FormBuilder, private accountsService: AccountsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
    });
    this.isAddMode = !this.id;
    this.addEditAccountform = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    });

  }
  get fname() { return this.addEditAccountform.get('fname'); }
  get lname() { return this.addEditAccountform.get('lname'); }
  get username() { return this.addEditAccountform.get('username'); }
  get email() { return this.addEditAccountform.get('email'); }
  get password() { return this.addEditAccountform.get('password'); }
  get confirmpassword() { return this.addEditAccountform.get('confirmpassword'); }

  onSubmit() {
    this.submitted = true;
    if (!this.addEditAccountform.invalid) {
      if (this.isAddMode) {
        this.addAccount();
      } else {
        this.updateAccount();
      }
    }
  }
  private addAccount() {
    this.accountsService.addAccount(this.addEditAccountform.value).subscribe(res => {
      this.router.navigate(['login']);
    });
  }
  private updateAccount() {
    this.accountsService.updateAccount(this.id, this.addEditAccountform.value).subscribe(res => {
      this.router.navigate(['login']);
    });
  }
  back() {
    this.router.navigate(['']);
  }
}