// Core Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Project Dependencies
// import { AuthGuard } from '../../shared/services/auth-guard.service';

// Components
import { DashboardComponent } from './components/dashboard';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuard],
        data: {
          title: 'Dashboard'
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

export class DashboardRoutingModule { }
