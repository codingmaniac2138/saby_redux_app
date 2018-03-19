import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { SearchService } from "../../services/search.service";
import { OrderPipe } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ROLES } from "../../models/roles.enum";
import * as _ from "lodash";
import { Subject } from "rxjs/Subject";
import { searchQuery } from "../../models/searchQuery.interface";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"],
    providers: [ SearchService ]
})

export class SearchComponent implements OnInit {

    first_name: string;
    last_name: string;
    employee_id: string;
    role: string;
    searchForm: NgForm;
    search_active_directory: boolean;
    buttonText: string;
    searchFlag: boolean;
    dirtyFlag: boolean;
    showTable: boolean;
    module_id: number = 1;
    query: searchQuery;
    order: string = 'first_name';
    users: any[];
    sortedUsers: any[];
    itemsPerPage: number = 8;
    p: number = 1;
    reverse: boolean = false;
    dataArrayLength: number;
    totalLength: number;
    len: number;
    role_option: string;
    role_option_list: Array<any>;
    // roles: Array<any>;

    constructor(
            private _searchService: SearchService, 
            private _orderPipe: OrderPipe, 
            private _ngxPaginationModule:NgxPaginationModule,
            private _activatedRoute: ActivatedRoute
        ) {}
  

    ngOnInit() {
        this.buttonText = "Search";
        this.sortedUsers = this._orderPipe.transform(this.users, 'first_name');
        this.searchFlag = true;
        this.showTable = false;
        this.dataArrayLength = 0;
        this.dirtyFlag = false;
        this._activatedRoute.queryParams.subscribe((params) => {
            this.search_active_directory = params.search_active_directory;
            this.users = [];
            this.showTable = false;
            this.searchFlag = true;
            this.dirtyFlag = false;
        });
        // this._searchService.headerName.next("search_user");
        this.role_option_list = [
            {
                "name": "amaze no access"
            },
            {
                "name": "amaze view"
            }
        ];
        // this.roles = [ROLES.ADMIN, ROLES.GUEST, ROLES.MODIFY, ROLES.NOACCESS, ROLES.VIEW];

        // this.role_mapping = {
        //     "amaze_noaccess": 1,
        //     "amaze_modify" :4 ,
        //     "amaze_admin":5,
        //     "amaze_guest" :2 ,
        //     "amaze_view" :3 ,
        // };

    }

    // on the click of the button
    onSubmit(form: NgForm) {
        this.searchForm = form;
        this.buttonText = "Searching...";
        this.searchFlag = false;
        this.showTable = true;
        this.dirtyFlag = true;
        console.log("the value of role_option is: "+ this.role_option);
        this.query = {
            "first_name": this.first_name || "",
            "last_name": this.last_name || "",
            "username": this.employee_id || "",
            "search_active_directory": this.search_active_directory
            // module: {
            //     module_id: this.module_id,
            //     roles: [
            //         {
            //             role_id: 5
            //         }
            //     ]
            // }
        };

        // calling the method in the search service with the query body
        this._searchService.searchOnAmazeDatabase(this.query).subscribe(
            (resultArray: Array<any>) => {
                // when data came with some information 
                // emit the data with the array
                this.parseResultDataArray(resultArray).then((dataArray) => {
                    this.users = dataArray;
                    this.searchFlag = true;
                    this.dirtyFlag = false;
                    this.buttonText = "Search";
                    if(this.users.length < 8) {
                        this.dataArrayLength = this.users.length;
                        this.totalLength = this.users.length;
                        if(this.dataArrayLength === 0) {
                            this.showTable = false;
                        }
                    }
                    else {
                        this.dataArrayLength = 8;
                        this.totalLength = this.users.length;
                    }

                });          
            }, (err) => {
                // when error came from the backend emit none
                this.users = [];
                this.showTable = false;
                this.searchFlag = true;
                this.dirtyFlag = true;
                this.dataArrayLength = 0;
                this.buttonText = "Search";
                // this.searchForm.resetForm();
                console.log("Inside error when there is no data");
            });
    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }

        this.order = value;
    }

    parseResultDataArray(resultArray): Promise<any> {
        return new Promise((resolve, reject) => {
            let dataArray = [];
            _.forEach(resultArray, (user) => {
                let tempArray = [];

                _.flatMap(user.authorities, (amaze_module) => {
                    let tempRoles = [];
                    _.map(amaze_module.roles, (role: any) => {
                        if(role.name === ROLES.MODIFY) {
                            tempRoles.push("USER");
                        }
                        else {
                            tempRoles.push(role.name);
                        }
                    });
                    tempArray.push(tempRoles[0]);
                });

                dataArray.push({
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "employee_id": user.username,
                    "roles": tempArray
                });
            });
            resolve(dataArray);
        });
    }

    onSearchActiveDirectory() {
        this._searchService.searchOnActiveDirectory(this.first_name).subscribe((dataArray) => {
            this.users = dataArray;
            this.searchFlag = true;
            this.showTable = true;
            this.dirtyFlag = false;
            this.buttonText = "Search";
            if(this.users.length === 0) {
                this.showTable = false;
            }
            if(this.users.length < 8) {
                console.log("the value of p is: "+ this.p);
                this.dataArrayLength = this.users.length;
                this.totalLength = this.users.length;
                if(this.dataArrayLength === 0) {
                    this.showTable = false;
                }
            }
            else {
                console.log("the value of p is: "+ this.p);
                this.dataArrayLength = 8;
                this.totalLength = this.users.length;
            }
        });
    }

    // hook will be triggered when page will change
    pageChanged($event) {
        if($event === 1) {
            if(this.users.length > this.itemsPerPage) {
                this.dataArrayLength = this.itemsPerPage;
                this.totalLength = this.users.length;
            } 
            else {
                this.dataArrayLength = this.users.length;
                this.totalLength = this.users.length;
            }
        }
        else {
            // this is the last page
            if((this.itemsPerPage*$event) > this.users.length) {
                this.dataArrayLength = this.users.length - (this.itemsPerPage*($event-1));
                this.totalLength = this.users.length;
            }
            else {
                this.dataArrayLength = this.itemsPerPage;
                this.totalLength = this.users.length;
            }
        }
    }

    // getTheSearchQuery() {
    //     if()
    // }

}