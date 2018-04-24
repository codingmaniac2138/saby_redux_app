import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

// Importing the store from the core library
import { Store } from "@ngrx/store";
import { AppState } from "../../../main/appStore/app.state";
import * as AuthActions from "../../../main/appStore/authStore/authStore.action"; 

import { Observable } from "rxjs/Observable";

// Importing the Authorization Service
import { AuthorizationService } from "../../../main/services/authorization.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit, OnDestroy {

  caremoreID: string;
  password: string;
  checkbox: boolean;
  spinnerFlag: boolean;
  errorBlockFlag: boolean;
  buttonText: string;
  buttonColorFlag: boolean;

  constructor(
    private _authService: AuthorizationService,
    private _router: Router,
    private _store: Store<AppState>
  ) {}

  ngOnInit() {
    this.spinnerFlag = false;
    this.errorBlockFlag = false;
    this.checkbox = false;
    this.buttonText = "Sign In";
    this.buttonColorFlag = false;
  }

  // onSubmit function
  onSubmit(loginForm: NgForm) {
    this.spinnerFlag = true;
    this.buttonText = "Signing In....";
    this.buttonColorFlag = true;

    console.log("Inside the submit of the onSubmit function");
    // this._store.dispatch(new AuthActions.SetToken({ access_token: "access_token", refresh_token: "refresh_token"}));

    // this._authService.login(this.caremoreID, this.password).subscribe((data) => {
    //   console.log("data is: "+ JSON.stringify(data));
    // });
    this._authService.login(this.caremoreID, this.password);

    // check whether the error has occured or not
    this._store.select('auth').subscribe((data) => {
      if(data.error != null) {
        this.errorBlockFlag = true;
      }
    });

    // // this.handleRememberMe();
    // this._authService.login(this.caremoreID, this.password).subscribe(
    //   () => {
    //     console.log("Inside the sucess of authservice function");
    //     console.log("user has logged in succesfully");
    //     this._router.navigate(['/', "user_management", "search_user"], { queryParams: {"search_active_directory": false}});
    //   },
    //   (err) => {
    //     console.log("Inside the error of the authservice"+ JSON.stringify(err));
    //     this.errorBlockFlag = true;
    //     this.spinnerFlag = false;
    //     this.buttonText = "Sign In";
    //     this.buttonColorFlag = false;
    //   }
    // );
  }


  //handle the remember me with the cookie service
  // handleRememberMe() {
  //   if (this.checkbox) {
  //     if (this._cookieService.get("username")) {
  //       // if the user has changed the 
  //       if(this.caremoreID !== this._cookieService.get("username")) {
  //         this._cookieService.put("username", this.caremoreID);
  //       }
  //     }
  //     else {
  //       // putting in the cookie store
  //       this._cookieService.put("username", this.caremoreID);
  //     }
  //   }
  // }

  // reset the values after the error block is closed
  closeErrorBlock() {
    // this.errorBlockFlag = false;
    // this.spinnerFlag = false;
    // this.buttonText = "Sign In";
    // this.buttonColorFlag = false;
  }

  // Checking whether username and password are present in the store
  checkCookieStore() {
    // if(this._cookieService.get("username")) {
    //   this.caremoreID = this._cookieService.get("username");
    //   this.checkbox = true;
    // }
    // else {
    //   this.caremoreID = "";
    //   this.password = "";
    //   this.checkbox = false;
    // }
  }

  ngOnDestroy() {

  }

}