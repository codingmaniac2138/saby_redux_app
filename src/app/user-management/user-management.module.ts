// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Routing
import { UserManagementRoutingModule } from './user-management-routing.module';

// Importing the Shared Module
import { SharedModule } from "../shared/shared.module";


// Components
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule
  ],
  declarations: [
    LandingComponent
  ]
})
export class UserManagementModule { }
