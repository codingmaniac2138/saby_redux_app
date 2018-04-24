<<<<<<< HEAD
import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";

import { User } from "../models/user.model";

// export const MOCK_USER = new User("amazetest1","hars1014@NY", "AF70665", "Harshit", "Pareek");

@Injectable()
export class UserService {

  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  // public login(caremoreID: string, password: string): Observable<User> {

  //   // http request to authenticate the user and get all the credentials from the user
  //   if(caremoreID === MOCK_USER.caremoreId && password === MOCK_USER.password) {
  //     this.isLoggedIn = true;
  //     return Observable.of(MOCK_USER);
  //   } 
  //   else {
  //     return Observable.throw(new Error("CareMore Id and Password"));
  //   }
  // }

  public isAuthenticated(): Observable<boolean> {
    return Observable.of(this.isLoggedIn);
  }

  // returning the logged In user
  // public getLoggedInUser(): Observable<User> {
  //   return Observable.of(MOCK_USER);
  // }
  
  // logging out the user
  public logout(): Observable<boolean> | Promise<boolean> | boolean {
    this.isLoggedIn = false;
    return Observable.of(this.isLoggedIn);
  }
}
=======
import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";

import { User } from "../models/user.model";

// export const MOCK_USER = new User("amazetest1","hars1014@NY", "AF70665", "Harshit", "Pareek");

@Injectable()
export class UserService {

  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  // public login(caremoreID: string, password: string): Observable<User> {

  //   // http request to authenticate the user and get all the credentials from the user
  //   if(caremoreID === MOCK_USER.caremoreId && password === MOCK_USER.password) {
  //     this.isLoggedIn = true;
  //     return Observable.of(MOCK_USER);
  //   } 
  //   else {
  //     return Observable.throw(new Error("CareMore Id and Password"));
  //   }
  // }

  public isAuthenticated(): Observable<boolean> {
    return Observable.of(this.isLoggedIn);
  }

  // returning the logged In user
  // public getLoggedInUser(): Observable<User> {
  //   return Observable.of(MOCK_USER);
  // }
  
  // logging out the user
  public logout(): Observable<boolean> | Promise<boolean> | boolean {
    this.isLoggedIn = false;
    return Observable.of(this.isLoggedIn);
  }
}
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
