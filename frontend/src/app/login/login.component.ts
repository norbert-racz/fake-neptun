import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { routePaths } from '../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login = this.formBuilder.group({
    username: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  public onSubmit(){
    this.router.navigateByUrl(routePaths.HOME);
  }

  public toRegisterPage(){
    this.router.navigateByUrl(routePaths.REGISTER);
  }
}
