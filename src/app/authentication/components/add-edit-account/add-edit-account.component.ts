import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AccountsService } from 'src/app/core/data-access/accounts.service';
import { MustMatch } from './CustomValidators';
import { Account } from 'src/app/core/data-access/account';
@Component({
  selector: 'app-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrls: ['./add-edit-account.component.scss']
})
export class AddEditAccountComponent implements OnInit {
  addEditAccountform!: FormGroup;
  id!: number;
  isAddMode = true;
  submitted = false;
  constructor(private fb: FormBuilder, private accountsService: AccountsService, private router: Router, private route: ActivatedRoute) {
    this.addEditAccountform = new FormGroup(
      {
        fname: new FormControl('', [Validators.required]),
        lname: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      {
        validators: MustMatch('password', 'confirmPassword')
      });
  }
  ngOnInit(): void { }
  onSubmit() {
    this.submitted = true;
    if (!this.addEditAccountform.invalid) {
      if (this.isAddMode) {
        this.addAccount();
      } else {
        this.updateAccount();
      }
    }
    console.log("from onsubmit", this.addEditAccountform);
  }
  private addAccount() {
    console.log("this add edit account form ", this.addEditAccountform.value);
    this.accountsService.addAccount({
      fname: this.addEditAccountform.value.fname,
      lname: this.addEditAccountform.value.lname,
      username: this.addEditAccountform.value.username,
      email: this.addEditAccountform.value.email,
      password: this.addEditAccountform.value.password
    }).subscribe(res => {
      this.addEditAccountform.reset();
      this.router.navigate(['auth/login']);
    });
  }
  private updateAccount() {
    this.accountsService.updateAccount({
      account_id: this.id,
      fname: this.addEditAccountform.value.fname,
      lname: this.addEditAccountform.value.lname,
      username: this.addEditAccountform.value.username,
      email: this.addEditAccountform.value.email,
      password: this.addEditAccountform.value.password
    }).subscribe(res => {
      this.addEditAccountform.reset();
      this.router.navigate(['accounts/account-list']);
    });
  }
  back() {
    this.router.navigate(['']);
  }
  get fname() { return this.addEditAccountform.get('fname'); }
  get lname() { return this.addEditAccountform.get('lname'); }
  get username() { return this.addEditAccountform.get('username'); }
  get email() { return this.addEditAccountform.get('email'); }
  get password() { return this.addEditAccountform.get('password'); }
  get confirmPassword() { return this.addEditAccountform.get('confirmPassword'); }
}