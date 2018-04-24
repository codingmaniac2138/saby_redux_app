<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module 
import { BondRoutingModule } from './bond-routing.module';

// Importing Shared Module
import { SharedModule } from "../shared/shared.module";

// Importing the store module and adding the bond as a feature
import { StoreModule } from "@ngrx/store";
import { bondReducer } from "./bondStore/bondStore.reducer";

// Importing Components
import { BondLandingComponent } from './components/bondlanding/bondlanding.component';
import { ProviderComponent } from './components/provider/provider.component';
import { ProviderListComponent } from './components/provider/provider-list/provider-list.component';
import { ProviderItemComponent } from './components/provider/provider-list/provider-item/provider-item.component';
import { ProviderDetailComponent } from './components/provider/provider-detail/provider-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BondRoutingModule,
    SharedModule,
    StoreModule.forFeature("bond", bondReducer)
  ],
  declarations: [
    BondLandingComponent,
    ProviderComponent,
    ProviderListComponent,
    ProviderItemComponent,
    ProviderDetailComponent  
  ]
})
export class BondModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module 
import { BondRoutingModule } from './bond-routing.module';

// Importing Shared Module
import { SharedModule } from "../shared/shared.module";

// Importing the store module and adding the bond as a feature
import { StoreModule } from "@ngrx/store";
import { bondReducer } from "./bondStore/bondStore.reducer";

// Importing Components
import { BondLandingComponent } from './components/bondlanding/bondlanding.component';
import { ProviderComponent } from './components/provider/provider.component';
import { ProviderListComponent } from './components/provider/provider-list/provider-list.component';
import { ProviderItemComponent } from './components/provider/provider-list/provider-item/provider-item.component';
import { ProviderDetailComponent } from './components/provider/provider-detail/provider-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BondRoutingModule,
    SharedModule,
    StoreModule.forFeature("bond", bondReducer)
  ],
  declarations: [
    BondLandingComponent,
    ProviderComponent,
    ProviderListComponent,
    ProviderItemComponent,
    ProviderDetailComponent  
  ]
})
export class BondModule { }
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
