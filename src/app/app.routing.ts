import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import Layouts
import { GuestLayoutComponent } from './layouts';

// Project Dependencies
import { AuthGuard } from './shared/services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: '',
    component: GuestLayoutComponent,
    data: {
      title: 'User'
    },
    children: [
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  // {
  //   path: '',
  //   component: GuestLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'home',
  //       canActivate: [AuthGuard],
  //       loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
