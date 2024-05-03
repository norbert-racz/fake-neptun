import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routePaths } from '../app.routes';

@Component({
  selector: 'app-unregister',
  standalone: true,
  imports: [],
  templateUrl: './unregister.component.html',
  styleUrl: './unregister.component.scss'
})
export class UnregisterComponent {
  constructor(
    private router: Router
  ){}

  toLogin(){
    this.router.navigateByUrl(routePaths.HOME);
  }
}
