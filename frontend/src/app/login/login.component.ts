import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  username = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router){}

  public onSubmit(){

  }

  public toRegisterPage(){
    this.router.navigateByUrl(routePaths.REGISTER);
  }
}
