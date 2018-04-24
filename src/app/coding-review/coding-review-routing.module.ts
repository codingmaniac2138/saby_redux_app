import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing the components for the coding review
import { LandingComponent } from "./components/landing/landing.component";
import { ReviewerGridComponent } from "./components/reviewer/grid/reviewer-grid.component";
import { CodingreviewerComponent } from './components/reviewer/codingreviewer/codingreviewer.component';
import { InforeviewerComponent } from './components/reviewer/inforeviewer/inforeviewer.component';

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: {
        label: "",
        desc: ""
      }
    },
    component: LandingComponent,
    children: [
      {
        path: "reviewer",
        canActivateChild: [],
        children:[
          {
            path: "task_list",
            data: {
              breadcrumb: {
                label: "Workspace",
                desc: "Task List"
              }
            },
            component: ReviewerGridComponent
          },
          {
            path: "task_lst",
            data: {
              breadcrumb: {
                label: "Workspace ",
                desc: "Reviewer"
              }
            },
            component: CodingreviewerComponent
          },
          {
            path: "info/:id",
            data: {
              breadcrumb: {
                label: "Workspace",
                desc: "info"
              }
            },
            component: InforeviewerComponent
          }
          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingReviewRoutingModule { }
