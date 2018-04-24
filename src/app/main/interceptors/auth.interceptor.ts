import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

// Importing the store, App State and Auth State
import { Store } from "@ngrx/store";
import { AppState } from "../appStore/app.state";
import { AuthState } from "../appStore/authStore/authStore.state";

// Importing the take operator
import "rxjs/add/operator/take";
import "rxjs/add/operator/switchMap";

/**
 *  Authorization Interceptor that will handle the adding of the Authorization Header.
 *  1. Add the Authorization Header in the http request from local storage
 */

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private _store: Store<AppState>) {}

    // intercept method that will add tokens in the header
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // For now the access_token from the local storage is working fine
        const access_token = localStorage.getItem("access_token");

        if(access_token) {
            console.log("Inside access_token is available");
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    `Bearer ${access_token}`)
                });
    
            return next.handle(cloned);
        }
        else {
            console.log("Inside access_token is not available");
            return next.handle(req);
        }

        // Trying to get the access_token from the store to user inside the interceptor
        // return this._store.select("auth")
        //                   .take(1)
        //                   .switchMap((authState: AuthState) => {
        //                     const cloned = req.clone({
        //                         headers: req.headers.set("Authorization",
        //                             `Bearer ${authState.access_token}`)
        //                     });
        //                     return next.handle(cloned);
        //                   });
        
        // const access_token = this._store.select("auth").take(1).subscribe((data) => {
        //     return data.access_token;
        // });
    }
}