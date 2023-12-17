import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AccountsService } from 'src/app/core/data-access/accounts.service';
import { MustMatch } from './CustomValidators';
import { Account } from 'src/app/accounts/data-access/account';
@Component({
  selector: 'app-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrls: ['./add-edit-account.component.scss'],
})
export class AddEditAccountComponent implements OnInit {
  addEditAccountform!: FormGroup;
  id!: number;
  isAddMode = true;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private accountsService: AccountsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.addEditAccountform = this.fb.group(
      {
        fname: ['', [Validators.required]],
        lname: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: MustMatch('password', 'confirmPassword'),
      }
    );
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    if (this.id) {
      this.accountsService.getAccount(this.id).subscribe((res) => {
        this.addEditAccountform.patchValue({
          fname: res.fname,
          lname: res.lname,
          username: res.username,
          email: res.email,
          password: res.password,
          confirmPassword: res.password,
        });
      });
      this.isAddMode = false;
    }
  }
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
    this.accountsService
      .addAccount(this.addEditAccountform.value)
      .subscribe((res) => {
        this.addEditAccountform.reset();
        this.router.navigate(['auth/login']);
      });
  }
  private updateAccount() {
    this.accountsService
      .updateAccount({
        account_id: this.id,
        fname: this.addEditAccountform.value.fname,
        lname: this.addEditAccountform.value.lname,
        username: this.addEditAccountform.value.username,
        email: this.addEditAccountform.value.email,
        password: this.addEditAccountform.value.password,
      })
      .subscribe((res) => {
        this.addEditAccountform.reset();
        this.router.navigate(['accounts/account-list']);
      });
  }
  get fname() {
    return this.addEditAccountform.get('fname');
  }
  get lname() {
    return this.addEditAccountform.get('lname');
  }
  get username() {
    return this.addEditAccountform.get('username');
  }
  get email() {
    return this.addEditAccountform.get('email');
  }
  get password() {
    return this.addEditAccountform.get('password');
  }
  get confirmPassword() {
    return this.addEditAccountform.get('confirmPassword');
  }
  back() {
    this.router.navigate(['']);
  }
}
