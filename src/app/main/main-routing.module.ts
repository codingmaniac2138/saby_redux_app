import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing the components for the Main Module
import { LoginComponent } from "../shared/components/login/login.component";
import { PagenotfoundComponent } from "../shared/components/pagenotfound/pagenotfound.component";

// Auth Route guard
import { AuthGuard } from "./services/auth-guard.service"; 


/**
 * Main Routes of the application 
 *  1. Contain the login route (Eager Loding)
 *  2. Contain the routes for the Bond Module (Lazy Loaded)
 *  3. Contain the routes for the User Management Module (Lazy Loaded)
 *  4. Contain the routes for the Coding Review Module (Lazy Loaded)
 *  In the future please add the routes of the future modules
 */
const routes: Routes = [
  { 
    path: "", 
    redirectTo: "/login", 
    pathMatch: "full" 
  },
  { 
    path: "login", 
    component: LoginComponent 
  },
  {
    path: "bond",
    data: {
      breadcrumb: {
        label: "Area",
        desc: "Bond"
      }
    },
    canActivate: [ AuthGuard ],
    loadChildren: "../bond/bond.module#BondModule"
  },
  // {
  //   path: "coding_review",
  //   data: {
  //     breadcrumb: {
  //       label: "Area",
  //       desc: "Coding Review"
  //     }
  //   },
  //   loadChildren: "../coding-review/coding-review.module#CodingReviewModule"
  // },
  // {
  //   path: "user_management",
  //   loadChildren: "../user-management/user-management.module#UserManagementModule"
  // },
  // {
  //   path: "**",
  //   component: PagenotfoundComponent
  // },
  // {
  //   path: "",
  //   component: MainComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
