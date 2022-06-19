import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public registerForm!: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder, private accountsService: AccountsService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    });

  }
  get fname() { return this.registerForm.get('fname'); }
  get lname() { return this.registerForm.get('lname'); }
  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmpassword() { return this.registerForm.get('confirmpassword'); }

  onSubmit() {
    this.submitted = true;
    if (!this.registerForm.invalid) {
      this.accountsService.addAccount(this.registerForm.value).subscribe(res => {
        this.router.navigate(['login']);
      });
    }
  }

}