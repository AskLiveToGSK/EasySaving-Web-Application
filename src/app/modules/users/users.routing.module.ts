// Core Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project Dependencies
//  import { AuthGuard } from '../../shared/services/auth-guard.service';

import { LoginComponent, RegisterComponent } from './components';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User Account'
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})

export class UsersRoutingModule { }
