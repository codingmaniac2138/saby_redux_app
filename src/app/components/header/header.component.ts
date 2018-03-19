import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

// import { SearchService } from "../../services/search.service";
import { AuthorizationService } from "../../services/authorization.service";
import { Subscription } from "rxjs/Subscription";
import { DummyService } from "../../services/dummy.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})

export class HeaderComponent implements OnInit, OnDestroy {

    @Input() area: string;
    headerNameSubsription: Subscription;
    userNameSubscription: Subscription;
    workspace: string;
    first_name: string;
    last_name: string;

    constructor(
        private _authService: AuthorizationService,
        private _activatedRoute: ActivatedRoute,
        private _dummyService: DummyService
    ) {}

    // In this function we have to put the value from the path and get the user's first name and last name
    // fetch user 
    ngOnInit() {
        // this._dummyService.headingSubject.subscribe((headerString: string) => {
        //     console.log("Inside the header with the value of the header value: "+ headerString);
        //     this.area = headerString;
        //     this.workspace = headerString;
        // });

        // this._activatedRoute.params.subscribe((params: Params) => {
        //     console.log("workspace is: "+ JSON.stringify(params));
        //     this.workspace = params["workspace"];
        // });
        
        // this._activatedRoute.params.subscribe((params: Params) => {
        //     this.area = params["module"];    
        // });

        this._authService.fetchUserAfterLogin().subscribe((data: any) => {
            this.first_name = <string>data.first_name;
            this.last_name = <string>data.last_name;
            this.workspace = <string>data.workspace;
        });
    }

    ngOnDestroy() {
        this.headerNameSubsription.unsubscribe();
        this.userNameSubscription.unsubscribe();
    }
}