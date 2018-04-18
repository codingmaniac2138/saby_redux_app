import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from "./components/landing/landing.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: {
        label: "",
        desc: ""
      }
    },
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingReviewRoutingModule { }
