import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

// Shared Components 
import { HeaderComponent } from "./components/header/header.component";
import { BreadcrumsComponent } from "./components/breadcrums/breadcrums.component";
import { LoginComponent } from "./components/login/login.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";

// Importing Pipes
import { CapitalizePipe } from "./pipes/capitalize.pipe";

// Importing Router Module because we are using routerLink in the header
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumsComponent,
    LoginComponent,
    PagenotfoundComponent, 
    CapitalizePipe
  ],
  providers: [],
  exports: [
    HeaderComponent,
    BreadcrumsComponent, 
    LoginComponent,
    PagenotfoundComponent,
    CapitalizePipe
  ]
})
export class SharedModule { }
