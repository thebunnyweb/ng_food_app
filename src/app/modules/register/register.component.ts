import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { checkNumber, checkConfirmPassword } from '@shared/sharedvalidation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  template: `<app-registerview
            [loginForm]="loginForm"
            [registerForm]="registerForm"
  ></app-registerview>`,
})
export class RegisterComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  registerForm: FormGroup;
  passwordFieldSubscribe: Subscription
  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.registerForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      lastname: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', checkConfirmPassword],
      phone: ['', checkNumber]
    });
  }

  ngOnInit() {
    this.passwordFieldSubscribe = this.registerForm.get('password').valueChanges.subscribe(e => {
      this.registerForm.get('confirmPassword').updateValueAndValidity();
    });
  }

  ngOnDestroy() {
    this.passwordFieldSubscribe.unsubscribe();
  }
}
