import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }
  public canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.redirectToLogin();
      return false;
    }

  }
}

