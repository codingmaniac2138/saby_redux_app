import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from "./app-routing.module"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { AuthInterceptor } from "./interceptors/auth.interceptor";
// import { CookieModule } from "ngx-cookie";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { OrderModule } from 'ngx-order-pipe';
// import { NgxPaginationModule } from 'ngx-pagination';

// import { AuthorizationService } from "./services/authorization.service";
// import { DummyService } from "./services/dummy.service";
// import { AddUserService } from "./services/add-user.service";
// import { SearchService } from "./services/search.service";
// import { UserProfileService } from "./services/user-profile.service";

// Main Module
import { MainModule } from "./main/main.module";
import { MainRoutingModule } from "./main/main-routing.module";
// import {  } from 

// import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { HeaderComponent } from './components/header/header.component';
// import { SearchComponent } from './components/search/search.component';
// import { PageNotFound } from "./components/pageNotFound/pageNotFound.component";
// import { TableComponent } from './components/table/table.component';
// import { LandingComponent } from "./components/landing/landing.components";
// import { UserProfile } from "./components/user-profile/user-profile.component";
// import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MainModule,
    MainRoutingModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
