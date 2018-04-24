<<<<<<< HEAD
/**
 * Authorization service that will be able to handle
 * 1. Login to handle POST request, parse the payload and storing into the localStorage
 * 2. Logout functionality
 * 3. Refresh Token functionality
*/

// Importing core libraries
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

// Importing the Store 
import { Store } from "@ngrx/store";
import { AppState } from "../appStore/app.state"; 
import * as AuthActions from "../appStore/authStore/authStore.action"; 

// Observable Operators
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

// Utility Libraries of lodash, moment and jwt helper
import { JwtHelper } from "angular2-jwt";
import * as _ from "lodash";
import * as moment from "moment";

import { CONFIG } from "../../../config"; 

@Injectable()
export class AuthorizationService {

    private loginURL: string = `${CONFIG.url_prefix}/amaze/api/v1.0/auth/login/`;
    private fetchUserURL: string = `${CONFIG.url_prefix}/amaze/api/v1.0/user/`;

    private loggedIn: boolean = false;

    constructor(
        private _httpService: HttpClient,
        private _store: Store<AppState>) { }

    // handling the login of user and we will allow only the admin
    public login(careMoreID: string, password: string) {
    
        console.log("Inside the login function");
        const body = {
            "username": careMoreID,
            "password": password
        };

        this._store.dispatch(new AuthActions.TryLogin(body));

        // if (localStorage.getItem("access_token")) {
        //     localStorage.removeItem("access_token");
        //     localStorage.removeItem("exp_access_time");
        //     localStorage.removeItem("refresh_token");
        //     localStorage.removeItem("exp_refresh_token");
        // }

        // return this._httpService.post(this.loginURL, body).do((res: Response) => {
        //     console.log("Inside the side effect of the responce");
        //     return res.json();
        // });

        // return this._httpService.post(this.loginURL, body).map((res: Response) => res).switchMap(result => this.handleSession(result));
    }

    // function for the logout
    public logout() {

    }

    // handle the session information like handling the session info
    private handleSession(res): Observable<any> {
        return Observable.create((observer) => {
            observer.next("aniket");
        });
    }

    // function to check whether the user is logged in or not
    public isLoggedIn() {
        return this.loggedIn;
    }

    // function to handle and get a new access token from refresh token
    private getNewAccessToken() {

    }

    // fetching user after user has logged in and get the data of first name and last name
    fetchUserAfterLogin():Observable<any> {
        return this._httpService.get(this.fetchUserURL).map((data: any) => {
            return { "first_name": data.first_name, "last_name": data.last_name };
        });
    }
}

// function to parse the payload for now I am providing logic of getting the ADMIN access to the 
    // USER_MANAGEMENT module. have to make this logic more sound
    // private parsePayload(payload) {
    //     return new Promise((resolve, reject) => {
    //         let loggedUser = [];
    //         _.forEach(payload.user.authorities, (amaze_module) => {
    //             let mapping = {};
    //             switch (amaze_module.module.name) {
    //                 case MODULES.USER_MANAGEMENT:
    //                     mapping["module_name"] = MODULES.USER_MANAGEMENT;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 case MODULES.AMAZE_MOBILE:
    //                     mapping["module_name"] = MODULES.AMAZE_MOBILE;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 case MODULES.AMAZE_TOUCH:
    //                     mapping["module_name"] = MODULES.AMAZE_TOUCH;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 case MODULES.BOND:
    //                     mapping["module_name"] = MODULES.BOND;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 case MODULES.CODING_REVIEW:
    //                     mapping["module_name"] = MODULES.CODING_REVIEW;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 default:
    //                     console.log("Default case");
    //                     break;
    //             }
    //         });

    //         // run for the logged user
    //         _.forEach(loggedUser, (user_access) => {
    //             if (user_access.roles[0] == true) {
    //                 // console.log("the value of user access is: " + user_access["module_name"]);
    //                 resolve(user_access["module_name"]);
    //             }
    //         });
    //     });
    // }

// if (!res) {
        //     // if the value of the token did not came and the user is not the admin
        //     // console.log("the value of token did not came");
        //     throw Observable.throw({
        //         "error": ERRORS.USERNAME_NOT_CORRECT
        //     });
        // }
        // else {
        //     const jwtHelper = new JwtHelper();
        //     const localPayload = jwtHelper.decodeToken(res.access_token);
        //     const expirationTime = localPayload.exp * 1000;
        //     const issuedTime = localPayload.iat * 1000;
        //     return Observable.create((observer) => {
        //         observer.next("hello aniket");
        //     });
        //     // console.log("local payload is: "+ JSON.stringify(localPayload));
        //     // this.parsePayload(localPayload).then((data) => {
        //     //     return data;
        //     // });
        //     // if (this.parsePayload(localPayload)) {
        //     //     // localStorage.setItem("access_token", res.access_token);
        //     //     // localStorage.setItem("exp_access_time", expirationTime.toString());
        //     //     // localStorage.setItem("refresh_token", res.refresh_token);
        //     //     // localStorage.setItem("exp_refresh_token", moment(expirationTime).add(45, "days").valueOf().toString());
        //     // }
        //     // else {
        //     //     // the user does not have admin access
        //     //     return Observable.throw({
        //     //         "error": ERRORS.NOT_AUTHORIZED
        //     //     });
        //     // }
        // }

// return this._httpService.post(this.loginURL, body).map((res: Response) => { return res.json(); }).do((resObject) => {
        //     console.log("inside the do method of the http service");
        //     return this.handleSession(resObject);
        // });
        // return this._httpService.post(this.loginURL, body).map((res: any) => {
        //     if(!res) {
        //         console.log("res is not defined");
        //         return null;
        //     }
        //     else {
        //         const jwtHelper = new JwtHelper();
        //         const localPayload = jwtHelper.decodeToken(res.access_token);
        //         const expirationTime = localPayload.exp * 1000;
        //         const issuedTime = localPayload.iat * 1000;
        //         return this.parsePayload(localPayload).then((module_name) => {
        //             console.log("the value of module name: "+ module_name);
        //             return module_name;
        //         });
        //         // console.log("the value of module name is:"+ module_name)
        //     }
=======
/**
 * Authorization service that will be able to handle
 * 1. Login to handle POST request, parse the payload and storing into the localStorage
 * 2. Logout functionality
 * 3. Refresh Token functionality
*/

// Importing core libraries
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

// Importing the Store 
import { Store } from "@ngrx/store";
import { AppState } from "../appStore/app.state"; 
import * as AuthActions from "../appStore/authStore/authStore.action"; 

// Observable Operators
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/observable/of";

// Utility Libraries of lodash, moment and jwt helper
import { JwtHelper } from "angular2-jwt";
import * as _ from "lodash";
import * as moment from "moment";

import { CONFIG } from "../../../config"; 

@Injectable()
export class AuthorizationService {

    private loginURL: string = `${CONFIG.url_prefix}/amaze/api/v1.0/auth/login/`;
    private fetchUserURL: string = `${CONFIG.url_prefix}/amaze/api/v1.0/user/`;

    private loggedIn: boolean = false;

    constructor(
        private _httpService: HttpClient,
        private _store: Store<AppState>) { }

    // handling the login of user and we will allow only the admin
    public login(careMoreID: string, password: string) {
    
        console.log("Inside the login function");
        const body = {
            "username": careMoreID,
            "password": password
        };

        this._store.dispatch(new AuthActions.TryLogin(body));

        // if (localStorage.getItem("access_token")) {
        //     localStorage.removeItem("access_token");
        //     localStorage.removeItem("exp_access_time");
        //     localStorage.removeItem("refresh_token");
        //     localStorage.removeItem("exp_refresh_token");
        // }

        // return this._httpService.post(this.loginURL, body).do((res: Response) => {
        //     console.log("Inside the side effect of the responce");
        //     return res.json();
        // });

        // return this._httpService.post(this.loginURL, body).map((res: Response) => res).switchMap(result => this.handleSession(result));
    }

    // function for the logout
    public logout() {

    }

    // handle the session information like handling the session info
    private handleSession(res): Observable<any> {
        return Observable.create((observer) => {
            observer.next("aniket");
        });
    }

    // function to check whether the user is logged in or not
    public isLoggedIn() {
        return this.loggedIn;
    }

    // function to handle and get a new access token from refresh token
    private getNewAccessToken() {

    }

    // fetching user after user has logged in and get the data of first name and last name
    fetchUserAfterLogin():Observable<any> {
        return this._httpService.get(this.fetchUserURL).map((data: any) => {
            return { "first_name": data.first_name, "last_name": data.last_name };
        });
    }
}

// function to parse the payload for now I am providing logic of getting the ADMIN access to the 
    // USER_MANAGEMENT module. have to make this logic more sound
    // private parsePayload(payload) {
    //     return new Promise((resolve, reject) => {
    //         let loggedUser = [];
    //         _.forEach(payload.user.authorities, (amaze_module) => {
    //             let mapping = {};
    //             switch (amaze_module.module.name) {
    //                 case MODULES.USER_MANAGEMENT:
    //                     mapping["module_name"] = MODULES.USER_MANAGEMENT;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 case MODULES.AMAZE_MOBILE:
    //                     mapping["module_name"] = MODULES.AMAZE_MOBILE;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 case MODULES.AMAZE_TOUCH:
    //                     mapping["module_name"] = MODULES.AMAZE_TOUCH;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 case MODULES.BOND:
    //                     mapping["module_name"] = MODULES.BOND;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 case MODULES.CODING_REVIEW:
    //                     mapping["module_name"] = MODULES.CODING_REVIEW;
    //                     mapping["roles"] = _.map(amaze_module.module.roles, (role: any) => {
    //                         return role.name == ROLES.ADMIN;
    //                     });
    //                     loggedUser.push(mapping);
    //                     break;
    //                 default:
    //                     console.log("Default case");
    //                     break;
    //             }
    //         });

    //         // run for the logged user
    //         _.forEach(loggedUser, (user_access) => {
    //             if (user_access.roles[0] == true) {
    //                 // console.log("the value of user access is: " + user_access["module_name"]);
    //                 resolve(user_access["module_name"]);
    //             }
    //         });
    //     });
    // }

// if (!res) {
        //     // if the value of the token did not came and the user is not the admin
        //     // console.log("the value of token did not came");
        //     throw Observable.throw({
        //         "error": ERRORS.USERNAME_NOT_CORRECT
        //     });
        // }
        // else {
        //     const jwtHelper = new JwtHelper();
        //     const localPayload = jwtHelper.decodeToken(res.access_token);
        //     const expirationTime = localPayload.exp * 1000;
        //     const issuedTime = localPayload.iat * 1000;
        //     return Observable.create((observer) => {
        //         observer.next("hello aniket");
        //     });
        //     // console.log("local payload is: "+ JSON.stringify(localPayload));
        //     // this.parsePayload(localPayload).then((data) => {
        //     //     return data;
        //     // });
        //     // if (this.parsePayload(localPayload)) {
        //     //     // localStorage.setItem("access_token", res.access_token);
        //     //     // localStorage.setItem("exp_access_time", expirationTime.toString());
        //     //     // localStorage.setItem("refresh_token", res.refresh_token);
        //     //     // localStorage.setItem("exp_refresh_token", moment(expirationTime).add(45, "days").valueOf().toString());
        //     // }
        //     // else {
        //     //     // the user does not have admin access
        //     //     return Observable.throw({
        //     //         "error": ERRORS.NOT_AUTHORIZED
        //     //     });
        //     // }
        // }

// return this._httpService.post(this.loginURL, body).map((res: Response) => { return res.json(); }).do((resObject) => {
        //     console.log("inside the do method of the http service");
        //     return this.handleSession(resObject);
        // });
        // return this._httpService.post(this.loginURL, body).map((res: any) => {
        //     if(!res) {
        //         console.log("res is not defined");
        //         return null;
        //     }
        //     else {
        //         const jwtHelper = new JwtHelper();
        //         const localPayload = jwtHelper.decodeToken(res.access_token);
        //         const expirationTime = localPayload.exp * 1000;
        //         const issuedTime = localPayload.iat * 1000;
        //         return this.parsePayload(localPayload).then((module_name) => {
        //             console.log("the value of module name: "+ module_name);
        //             return module_name;
        //         });
        //         // console.log("the value of module name is:"+ module_name)
        //     }
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
        // });