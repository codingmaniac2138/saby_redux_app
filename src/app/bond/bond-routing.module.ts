<<<<<<< HEAD
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
=======
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
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
