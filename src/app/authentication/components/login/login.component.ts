import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Credential } from '../../../Domain-Models/credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }


  onSubmit() {
    /*  this.submitted = true;
     if (this.loginForm.invalid) {
       this.authService.login(
         new Credential(this.loginForm.value.username, this.loginForm.value.password)
         //ToDo have to check why Credential couldn't be an interface
       );
     }
     //alert("Success"); */
  }

}