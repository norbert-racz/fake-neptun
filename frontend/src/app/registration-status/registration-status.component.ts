import { Component } from '@angular/core';
import { Router } from '@angular/router';
import FakeNeptunTexts from 'fake_neptun_common/build/fake_neptun_texts';
import { routePaths } from '../app.routes';

@Component({
  selector: 'app-registration-status',
  standalone: true,
  imports: [],
  templateUrl: './registration-status.component.html',
  styleUrl: './registration-status.component.scss'
})
export class RegistrationStatusComponent {
  successfullRegistrationMessage = FakeNeptunTexts.SUCCESSFULL_REGISTRATION_STATUS_TEXT;

  constructor(
    private router: Router
  ){}

  toHomePage(){
    this.router.navigateByUrl(routePaths.HOME);
  }
}
