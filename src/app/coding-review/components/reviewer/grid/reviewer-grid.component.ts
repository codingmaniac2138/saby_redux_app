import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatTableDataSource, MatSort, MatProgressSpinnerModule } from "@angular/material";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import "rxjs/add/operator/catch";

import * as _ from "lodash";

// The Model of the ReviwerTaskList
import { ReviewerTaskList } from "../../../models/reviewerTaskList.model";

// STATUS Enum
import { STATUS } from "../../../models/reviewerTaskList.model";

@Component({
  selector: 'app-reviewer-grid',
  templateUrl: './reviewer-grid.component.html',
  styleUrls: ['./reviewer-grid.component.scss']
})
export class ReviewerGridComponent implements OnInit {
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns = ["status", "first_name", "last_name", "discharge_date"];
    dataLength = 0;
    dataSource = new MatTableDataSource();
    dataSubscription: Subscription;

    new_filter: boolean = false;
    progress_filter: boolean = false;

    constructor() {}

    ngOnInit() {
        // The custom filter predicate
        this.dataSource.filterPredicate = (data: ReviewerTaskList, filter: string) => {
            if(filter == "") {
                return true;
            }
            else {
                let splitString = filter.split(" ");
                if (splitString.length > 1) {
                    return data.status.toLowerCase() == splitString[0] || data.status.toLowerCase() == splitString[1];
                }
                else {
                    return data.status.toLowerCase() == splitString[0];
                }
            }
        };

        this.getReviewerTaskListByAPI()
            .catch((err) => {
                console.log("error at the backend to fetch the data");
                return Observable.of([]);
            })
            .subscribe((reviewerTaskList: ReviewerTaskList[]) => {
                this.dataSource.data = reviewerTaskList;
                this.dataSource.sort = this.sort;
                this.dataLength = reviewerTaskList.length;
            });
    }

    applyFilter(filterString: string) {
        filterString = filterString.trim();
        filterString = filterString.toLowerCase();
        this.dataSource.filter = filterString;
    }

    getReviewerTaskListByAPI(): Observable<ReviewerTaskList[]> {
        return Observable.of(testData);
    }

    applyBooleanFilter(property: string, rule: boolean) {
        console.log("the value of the property and rule is: "+ property + rule);
        if(!rule) {
            // remove the filter
            this.applyFilter("");
        }
        else {
            if(property == "new") {
                if(this.progress_filter) {
                    property = `${property} in_progress`;
                }
            }
            else if(property == "in_progress") {
                if(this.new_filter) {
                    property = `${property} new`;
                }
            }
            this.applyFilter(property);
        }
    }

    // function when the row is clicked
    onRowClicked(row) {
        console.log("Inside the row function: "+ JSON.stringify(row));
    }
}

const testData: ReviewerTaskList[] = [
    { 
        status: STATUS.NEW,
        first_name: "John",
        last_name:"Doe", 
        discharge_date: new Date("11/10/2017"), 
    },
    {
        status: STATUS.IN_PROGRESS,
        first_name: "Tom",
        last_name: "Smith",
        discharge_date: new Date("08/12/2017")
    },
    {
        status: STATUS.IN_PROGRESS,
        first_name: "Jeff",
        last_name: "Jhone",
        discharge_date: new Date("12/10/2017")
    },
    {
        status: STATUS.NEW,
        first_name: "Ross",
        last_name: "Mark",
        discharge_date: new Date("01/10/2017")
    },
    {
        status: STATUS.COMPLETED,
        first_name: "Sabreen",
        last_name: "Ibrahim",
        discharge_date: new Date("01/08/2017")
    },
    {
        status: STATUS.COMPLETED,
        first_name: "Aniket",
        last_name: "Patwardhan",
        discharge_date: new Date("02/05/2017")
    },
    {
        status: STATUS.NEW,
        first_name: "Harshit",
        last_name: "Pareek",
        discharge_date: new Date("02/04/2017")
    }
];


