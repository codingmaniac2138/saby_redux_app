import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import { AppState } from "../appStore/app.state";

/**
 *  Authorization Interceptor that will handle the adding of the Authorization Header.
 *  1. Add the Authorization Header in the http request from local storage
 */

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private _store: Store<AppState>) {}

    // intercept method that will add tokens in the header
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        // const access_token = this._store.select("auth");
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
    }
}