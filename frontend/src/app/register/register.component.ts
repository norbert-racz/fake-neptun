import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { routePaths } from '../app.routes';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  register = this.formBuilder.group({
    username: '',
    password: '',
    passwordAgain: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  public onSubmit(){
    this.router.navigateByUrl(routePaths.REGISTRATION_STATUS);
  }
}
