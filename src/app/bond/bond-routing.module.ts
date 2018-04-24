import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BondLandingComponent } from "./components/bondlanding/bondlanding.component";
import { ProviderComponent } from "./components/provider/provider.component";

const routes: Routes = [
  { 
    path: "", 
    data: {
      breadcrumb: {
        label: "",
        desc: ""
      }
    },
    component: BondLandingComponent
  },
  { 
    path: "case_review",
    data: {
      breadcrumb: {
        label: "Workspace",
        desc: "Case Review"
      }
    },
    component: ProviderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BondRoutingModule { }
