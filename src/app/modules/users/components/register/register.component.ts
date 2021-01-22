import { Component } from '@angular/core';

// Load Components
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(
    private appComponent:AppComponent
  ) {
    this.appComponent.setTitle('Login');
   }

}
