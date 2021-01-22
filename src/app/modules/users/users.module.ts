// Core Dependencies
import { NgModule } from '@angular/core';

// Project Dependencies
// import { SharedModule } from 'src/app/shared/shared.module';
// import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

// Import Routes
import { UsersRoutingModule } from './users.routing.module';

// Module Dependencies
import { LoginComponent, RegisterComponent } from './components';
// import { LogoutComponent } from './components/logout/logout.component';
// import { UserLockComponent } from './components/lock/lock.component';

@NgModule({
  imports: [
    // SharedModule,
    // SharedComponentsModule,
    UsersRoutingModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
})
export class UsersModule {}
