import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./services/auth-guard.service";

import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LandingComponent } from "./components/landing/landing.components";
import { PageNotFound } from "./components/pageNotFound/pageNotFound.component"
import { SearchComponent } from "./components/search/search.component";
import { UserProfile } from "./components/user-profile/user-profile.component";

const appRoutes: Routes = [
    // { path: "", redirectTo: "/user-profile", pathMatch: "full" },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: ":module", component: LandingComponent, children: [
        // { path: "notdefined", component: PageNotFound },
        { path: ":workspace", component: SearchComponent }
    ] },
    { path: "**", component: PageNotFound }
    // { path: "user-profile", component: UserProfile },
    // { path: "", component: PageNotFound }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    providers: [ AuthGuard ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
// , canActivate: [ AuthGuard ]