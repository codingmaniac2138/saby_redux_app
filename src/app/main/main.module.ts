<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HTTP_INTERCEPTORS } from "@angular/common/http";

// the application routing 
import { MainRoutingModule } from './main-routing.module';

// Importing Shared Module
import { SharedModule } from "../shared/shared.module";

// Importing the store, store router module 
// and dev tools that helps in finding the actions and state during development
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// Importing the app reducer
import { appReducer } from "./appStore/app.reducer";

// Importing the Effects Module
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./appStore/authStore/auth.effects";

// Environment Variable
import { environment } from "../../environments/environment";

// Importing services for the module
import { AuthorizationService } from "./services/authorization.service";
import { AuthGuard } from "./services/auth-guard.service";

// Importing HTTP Interceptors
import { AuthInterceptor } from "./interceptors/auth.interceptor";

// Importing the pipes for the template
import { CapitalizePipe } from "../main/pipes/capitalize.pipe";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [] 
  ],
  declarations: [
    CapitalizePipe
  ],
  exports: [
    CapitalizePipe
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthorizationService,
    AuthGuard
  ]
})
export class MainModule {}
=======
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HTTP_INTERCEPTORS } from "@angular/common/http";

// the application routing 
import { MainRoutingModule } from './main-routing.module';

// Importing Shared Module
import { SharedModule } from "../shared/shared.module";

// Importing the store, store router module 
// and dev tools that helps in finding the actions and state during development
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// Importing the app reducer
import { appReducer } from "./appStore/app.reducer";

// Importing the Effects Module
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./appStore/authStore/auth.effects";

// Environment Variable
import { environment } from "../../environments/environment";

// Importing services for the module
import { AuthorizationService } from "./services/authorization.service";
import { AuthGuard } from "./services/auth-guard.service";

// Importing HTTP Interceptors
import { AuthInterceptor } from "./interceptors/auth.interceptor";

// Importing the pipes for the template
import { CapitalizePipe } from "../main/pipes/capitalize.pipe";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [] 
  ],
  declarations: [
    CapitalizePipe
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthorizationService,
    AuthGuard
  ]
})
export class MainModule {}
>>>>>>> 60e51669c798aed2b942c06d7624cc3031e753ab
