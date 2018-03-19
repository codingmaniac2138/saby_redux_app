import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { CookieModule } from "ngx-cookie";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AuthorizationService } from "./services/authorization.service";
import { DummyService } from "./services/dummy.service";

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFound } from "./components/pageNotFound/pageNotFound.component";
import { TableComponent } from './components/table/table.component';
import { LandingComponent } from "./components/landing/landing.components";
import { UserProfile } from "./components/user-profile/user-profile.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LandingComponent,
    HeaderComponent,
    SearchComponent,
    PageNotFound,
    TableComponent,
    UserProfile,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [
    AuthorizationService,
    DummyService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
