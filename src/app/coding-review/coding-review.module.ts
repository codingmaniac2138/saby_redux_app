<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing the Shared Module
import { SharedModule } from "../shared/shared.module";

// Importing Forms module
import { FormsModule } from "@angular/forms";
 
// MatTableModule, MatSortModule, MatPaginatorModule
import { MatTableModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule } from "@angular/material";

// Importing the ngrx store and including the coding review feature
import { StoreModule } from "@ngrx/store";
import { codingReviewReducer } from "./codingReviewStore/codingReview.reducer";

import { CodingReviewRoutingModule } from './coding-review-routing.module';

// Importing Pipes
import { FormatDate }  from "./pipes/date-format.pipe";
import { StringifyStatus } from "./pipes/status-stringify.pipe";

// Importing the components 
import { LandingComponent } from './components/landing/landing.component';
import { ReviewerGridComponent } from "./components/reviewer/grid/reviewer-grid.component";
import { CrtableComponent } from './components/reviewer/crtable/crtable.component';
import { CodingreviewerComponent } from './components/reviewer/codingreviewer/codingreviewer.component';
import { InforeviewerComponent } from './components/reviewer/inforeviewer/inforeviewer.component';
import { InfocrtableComponent } from './components/reviewer/infocrtable/infocrtable.component';

@NgModule({
  imports: [
    CommonModule,
    CodingReviewRoutingModule,
    SharedModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature("codingReview", codingReviewReducer)
  ],
  declarations: [
    LandingComponent,
    ReviewerGridComponent,
    StringifyStatus,
    FormatDate,
    CrtableComponent,
    CodingreviewerComponent,
    InforeviewerComponent,
    InfocrtableComponent
    ]
})
export class CodingReviewModule { }
=======
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
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
