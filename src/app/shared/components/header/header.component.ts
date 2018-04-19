import { Component, OnInit, OnDestroy } from '@angular/core';

import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { Router, ActivatedRoute, ActivationEnd, ActivatedRouteSnapshot } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  area$ = new BehaviorSubject("");
  workspace$ = new BehaviorSubject("");
  first_name = "Harshit";
  last_name = "Pareek";

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    
    // this._router.events
    //               .filter(event => event instanceof ActivationEnd)
    //               .map((route: ActivatedRoute) => route.snapshot)
    //               .distinctUntilChanged()
    //               .map((snapshot: ActivatedRouteSnapshot) => 
    //               .subscribe((data) => {this.buildBreadCrumb(snapshot))
    //                 this.breadcrumbs$.next(data);
    //               });
  }
  ngOnInit() {
    this.area$.next("Coding Review");
    this.workspace$.next("Task List");
  }

  ngOnDestroy() {
    this.area$.unsubscribe();
    this.workspace$.unsubscribe();
  }
}
 