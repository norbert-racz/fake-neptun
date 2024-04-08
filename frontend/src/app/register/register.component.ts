import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username = new FormControl('');
  password = new FormControl('');
  passwordAgain = new FormControl('');

  constructor(){}

  public onSubmit(){

  }
}
