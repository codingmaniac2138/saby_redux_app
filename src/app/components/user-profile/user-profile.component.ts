import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "app-user-profile",
    templateUrl: "./user-profile.component.html",
    styleUrls: ["./user-profile.component.scss"]
})

export class UserProfile implements OnInit  {
    
    first_name: string;
    last_name: string;
    employee_id: string;
    moduleValue: string;
    roleValue: string;

    constructor(
        private _activatedRoute: ActivatedRoute, 
        private _router: Router
    ) {}

    ngOnInit() {
        this.first_name = "Aziz";
        this.last_name = "Ansari";
        this.employee_id = "AF52738";
        this.moduleValue = "Mobile";
        this.roleValue = "No Access";
    }
}