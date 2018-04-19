import { Injectable } from "@angular/core";

// Importing the Actions and Effects from the store library @ngrx/effects
import { Actions, Effect } from "@ngrx/effects";

// Importing all the AuthActions from the Auth Actions file
import * as AuthActions from "./authStore.action";

// Importing HTTPClient for the server call
import { HttpClient } from "@angular/common/http";

// Importing the Config URL prefix either from the dev, prod, test and staging
import { CONFIG } from "../../../../config";

// Importing the User Model from the main module
import { User } from "../../models/user.model"; 

// Importing Observable
import { Observable } from "rxjs/Observable"; 

// Importing required operators from the rxjs
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/mergeMap";

/**
 * The Auth Effects class intercept the actions dispatched by the services or components
 * and provide the side effects like server calls and other side effects before it is fed to the reducer
 */

@Injectable() 
export class AuthEffects {
    private loginURL: string = `${CONFIG.url_prefix}/amaze/api/v1.0/auth/login/`;
    private fetchURL: string = `${CONFIG.url_prefix}/amaze/api/v1.0/user`;

    constructor(private actions$: Actions, private _httpClient: HttpClient) {}

    // the side effect of the getting the token
    // @Effect()
    // userLoggedIn = this.actions$
    //                    .ofType(AuthActions.SET_TOKEN)
    //                    .map((action: AuthActions.SetToken) => {
    //                         console.log("Inside the Map of the effect when set Token is fired");
    //                         console.log("the value of the Action payload is: "+ JSON.stringify(action));
    //                    });
    
    @Effect()
    trylogin = this.actions$
                   .ofType(AuthActions.TRY_LOGIN)
                   .map((action: AuthActions.TryLogin) => {
                        return action.payload;
                   })
                   .switchMap((body) => {
                        return this._httpClient.post(this.loginURL, body);
                   })
                   .switchMap((tokenData: { access_token: string, refresh_token: string }) => {
                       return this.getUser(tokenData);
                   })
                   .mergeMap((user: User) => {
                       return [
                           new AuthActions.LoggedIn(),
                           new AuthActions.SetLoggedInUser(user)
                       ];
                   })
                   .catch((err) => {
                       console.log("Inside the catch method");
                       return Observable.of(new AuthActions.AuthError("error has occured"));
                   });
    
    getUser(token: { access_token: string, refresh_token: string }): Observable<User> {
        const newUser = new User();
        newUser.first_name = "Harshit";
        newUser.last_name = "Pareek";
        newUser.username = "AF70665";
        return Observable.of(newUser);
    }

}