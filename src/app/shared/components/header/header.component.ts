import { Component, OnInit, OnDestroy } from '@angular/core';

import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { Router, ActivatedRoute, ActivationEnd, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from "@ngrx/store";
import { AppState } from "../../../main/appStore/app.state";
import { AuthState } from "../../../main/appStore/authStore/authStore.state";

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
    private _activatedRoute: ActivatedRoute,
    private _store: Store<AppState>
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
    this._store.select("auth").subscribe((data: AuthState) => {
      if(data.user.first_name && data.user.last_name) {
        this.first_name = data.user.first_name;
        this.last_name = data.user.last_name;
      }
    });
  }

  ngOnDestroy() {
    this.area$.unsubscribe();
    this.workspace$.unsubscribe();
  }
}
 