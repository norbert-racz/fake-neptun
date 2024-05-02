import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routePaths } from '../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(
    private router: Router
  ){}

  logout(){
    this.router.navigateByUrl(routePaths.LOGIN);
  }
}
