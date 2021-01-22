import { Component } from '@angular/core';

// Load Components
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(
    private appComponent: AppComponent
  ) {
    this.appComponent.setTitle('Login');
  }

 }
