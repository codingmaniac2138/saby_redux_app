import { Injectable } from "@angular/core";

// Importing the Actions and Effects from the store library @ngrx/effects
import { Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

// Importing all the AuthActions from the Auth Actions file
import * as AuthActions from "./authStore.action";

// Importing HTTPClient for the server call
import { HttpClient, HttpResponse } from "@angular/common/http";

// Importing the Config URL prefix either from the dev, prod, test and staging
import { CONFIG } from "../../../../config";

// Importing the User Model from the main module
import { User } from "../../models/user.model"; 

// Importing Observable
import { Observable } from "rxjs/Observable"; 

// Importing the router value is
import { Router } from "@angular/router";

// Importing the helper methods
import { JwtHelper } from "angular2-jwt";
import * as _ from "lodash";
import * as moment from "moment"; 

// Importing required operators from the rxjs
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/mergeMap";

import { all_actors } from "../../../../test-data/all-actors.data";

/**
 * The Auth Effects class intercept the actions dispatched by the services or components
 * and provide the side effects like server calls and other side effects before it is fed to the reducer
 */

@Injectable() 
export class AuthEffects {
    private loginURL: string = `${CONFIG.url_prefix}/amaze/api/v1.0/auth/login/`;
    private fetchURL: string = `${CONFIG.url_prefix}/amaze/api/v1.0/user`;
    // private localJSONURL = "../../../../test-data/clerk-actor.json";

    constructor(
            private actions$: Actions, 
            private _httpClient: HttpClient,
            private _router: Router
    ) {}

    // the side effect of the trying login
    @Effect()
    trylogin = this.actions$
                   .ofType(AuthActions.TRY_LOGIN)
                   .map((action: AuthActions.TryLogin) => {
                       if(localStorage.getItem("access_token")) {
                           localStorage.removeItem("access_token");
                       }
                       return action.payload;
                   })
                   .switchMap((body) => {
                        console.log("the value before the http call");
                        return this._httpClient.post(this.loginURL, body);
                   })
                   .map((tokenData: { access_token: string, refresh_token: string, access_token_exp?: string }) => {
                        const token_parser = new JwtHelper();
                        const decoded_token = token_parser.decodeToken(tokenData.access_token);
                        console.log("the value of the decoded parser is: "+ JSON.stringify(decoded_token));
                        const exp = (decoded_token.exp * 1000).toString();
                        tokenData.access_token_exp = exp;
                        return new AuthActions.SetToken(tokenData);
                   })
                   .catch((err) => {
                        console.log("Inside the catch method");
                        return Observable.of(new AuthActions.AuthError("error has occured"));
                    });
    
    // the side effect of the setting token
    @Effect()
    setToken = this.actions$
                   .ofType(AuthActions.SET_TOKEN)
                   .map((action: AuthActions.SetToken) => {
                        return action.payload;
                   })
                   .switchMap((tokenData: { access_token: string, refresh_token: string }) => {
                       // quick fix for the access_token for now should be accessed from the store
                       localStorage.setItem("access_token", tokenData.access_token);
                       return this.getUser(tokenData);
                   })
                   .mergeMap((userObject: User) => {
                       this._router.navigate([`${userObject.modules[0]}`]);
                       return [
                           new AuthActions.LoggedIn(),
                           new AuthActions.SetLoggedInUser(userObject)
                       ];
                   })
                   .catch((err) => {
                        console.log("Inside the catch method");
                        return Observable.of(new AuthActions.AuthError("error has occured"));
                    });
    
    getUser(token: { access_token: string, refresh_token: string }): Observable<User> {
        let stateObject = {
        };
        const token_parser = new JwtHelper();
        const decoded_token = token_parser.decodeToken(token.access_token);
        const newUser = new User();
        newUser.modules = ["coding_review"];
        newUser.username = decoded_token.user.username;
        console.log("the value of the username is: "+ newUser.username);
        // this.fetchUser(newUser.username).subscribe((res) => {
            
        // });
        return this.fetchUser(newUser.username).switchMap((user) => {
            newUser.first_name = user.first_name;
            newUser.last_name = user.last_name;
            newUser.actor = user.actors[0].name;
            return Observable.of(newUser);
        });
    }

    fetchUser(username: string): Observable<any>{
        // For now returning the array of all actors from the test data
        // return Observable.of(all_actors);
        let matched_user;
        _.forEach(all_actors, (user) => {
            if(user.username === username) {
                matched_user = user;
            } 
        });
        return Observable.of(matched_user);

        // Should get the data from the server (creating some issues and will be handled in future)
        // return this._httpClient.get(this.fetchURL).map((res) => {
        //     console.log("the value of the res is: "+ JSON.stringify(res));
        //     return res;
        // });
    }

}