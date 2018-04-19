import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing the Shared Module
import { SharedModule } from "../shared/shared.module";

// Importing the ngrx store and including the coding review feature
import { StoreModule } from "@ngrx/store";
import { codingReviewReducer } from "./codingReviewStore/codingReview.reducer";

import { CodingReviewRoutingModule } from './coding-review-routing.module';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    CodingReviewRoutingModule,
    SharedModule,
    StoreModule.forFeature("codingReview", codingReviewReducer)
  ],
  declarations: [
    LandingComponent
  ]
})
export class CodingReviewModule { }
