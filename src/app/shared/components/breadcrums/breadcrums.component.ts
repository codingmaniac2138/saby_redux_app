import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute, NavigationEnd, ActivationEnd, ActivatedRouteSnapshot } from "@angular/router";

import { Breadcrum } from "./breadcrum.interface";

import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/distinctUntilChanged";

import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.scss']
})
export class BreadcrumsComponent implements OnInit {
  public breadcrumbs$ = new BehaviorSubject([]);
  
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    
    this._router.events
                  .filter(event => event instanceof ActivationEnd)
                  .map((route: ActivatedRoute) => route.snapshot)
                  .distinctUntilChanged()
                  .map((snapshot: ActivatedRouteSnapshot) => this.buildBreadCrumb(snapshot))
                  .subscribe((data) => {
                    this.breadcrumbs$.next(data);
                  });
  }

  ngOnInit() {
    // console.log("Inside the breadcrum component");
  }

  buildBreadCrumb(activatedRouteSnapshot: ActivatedRouteSnapshot , url: string = "", breadcrumbs: Array<Breadcrum> = []): Array<Breadcrum> {
    
    const label = activatedRouteSnapshot.routeConfig ? activatedRouteSnapshot.routeConfig.data.breadcrumb["label"] : "";
    const description = activatedRouteSnapshot.routeConfig ? activatedRouteSnapshot.routeConfig.data.breadcrumb["desc"]: ""; 
    const path = activatedRouteSnapshot.routeConfig ? activatedRouteSnapshot.routeConfig.path : "";
    
    const nextURL = `${url}${path}/`;
    
    // console.log("the value of next URL is: "+ nextURL);
    const breadcrumb = {
      label: label,
      desc: description,
      URL: nextURL
    };

    // console.log("the value of new breadcrumb made" + JSON.stringify(breadcrumb));
    const nextBreadCrumb = [...breadcrumbs, breadcrumb];

    if(activatedRouteSnapshot.firstChild) {
      return this.buildBreadCrumb(activatedRouteSnapshot.firstChild, nextURL, nextBreadCrumb);
    }
    return nextBreadCrumb;
  }

}
