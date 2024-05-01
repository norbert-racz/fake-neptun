import { Component } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routePaths } from '../app.routes';
import { FormBuilder } from '@angular/forms';
import FakeNeptunTexts from 'fake_neptun_common/build/fake_neptun_texts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  userNameErrorMessage = FakeNeptunTexts.USERNAME_IS_REQUIRED_ERROR_MESSAGE;
  passwordErrorMessage = FakeNeptunTexts.PASSWORD_IS_REQUIRED_ERROR_MESSAGE;
  passwordAgainErrorMessage = FakeNeptunTexts.PASSWORD_AGAIN_IS_REQUIRED_ERROR_MESSAGE;
  passwordsMustMatchErrorMessage = FakeNeptunTexts.PASSWORDS_MUST_MATCH_ERROR_MESSAGE;
  
  submitted = false;

  register = this.formBuilder.group(
    {
      username: [
        '',
        Validators.required
      ],
      password: [
        '',
        Validators.required
      ],
      passwordAgain: [
        '',
        Validators.required
      ]
    },
    {
      validator: this.passwordsMustMatch
    }
  );
  
  passwordsMustMatch(control: AbstractControl): ValidationErrors | null{
    const password = control.get('password')?.value;
    const passwordAgain = control.get('passwordAgain')?.value;
    if (password !== passwordAgain) {
      control.get('passwordAgain')?.setErrors({ notMatching: true });
      return { notMatching: true };
    } else {
      return null;
    }
  }  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  public onSubmit() {
    this.submitted = true;
    if (this.register.valid) {
      this.router.navigateByUrl(routePaths.REGISTRATION_STATUS);
    }
  }
}
