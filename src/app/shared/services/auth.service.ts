import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  public redirectToLogin() {
    console.log("redirectToLogin");
    this.router.navigate(['users/login']);
  }

  public isAuthenticated(): boolean {
    // this.getToken();
    // if (this.token.user != null && this.token.user !== '') {
    //   return true;
    // } else {
    //   return false;
    // }
    return false;
  }
}
