// Core Dependencies
import { NgModule } from '@angular/core';

// // Project Dependencies
// import { SharedModule } from '../../shared/shared.module';
// import { SharedComponentsModule } from '../shared-components/shared-components.module';

// Import Routes
import { DashboardRoutingModule } from './dashboard.routing.module';

// Module Dependencies
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    // SharedModule,
    // SharedComponentsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }