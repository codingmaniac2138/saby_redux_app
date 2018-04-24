import { Component, OnInit, ViewChild } from '@angular/core';

// Including the MatPaginator, MatSort and MatTableDataStore
import { MatPaginator, MatSort, MatTableDataSource, PageEvent, MatSortable } from "@angular/material";

// Importing Observable
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';

// Importing rxjs operators
import "rxjs/add/operator/catch";
import { ReviewerTaskList } from "../../../models/reviewerTaskList.model";
import { STATUS } from "../../../models/reviewerTaskList.model";
import { Router } from '@angular/router';


@Component({
  selector: 'app-codingreviewer',
  templateUrl: './codingreviewer.component.html',
  styleUrls: ['./codingreviewer.component.scss']
})
export class CodingreviewerComponent implements OnInit {

 
 
  // View Child for the pagination and sorting
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns =["status", "first_name", "last_name", "discharge_date"];
  dataLength = 0;
  dataSource = new MatTableDataSource();
  pageEvent = PageEvent;
  isDataLoading: boolean = true; 
  d: any ;
  c:any;
  click_row:any;



  constructor(public router: Router) { }

  ngOnInit() {  
    //getting the data Observable way
    this.getTaskListfromAPI()
        .catch((err) => {
          console.log("error has occured");
          return Observable.of([]);
        })
        .subscribe((taskListData) => {
          this.dataSource.data = taskListData;
          this.dataLength = taskListData.length;
          this.isDataLoading = false;
        });
  }

  // Applying the filter in the material table
  // applyFilter(filterString: string) {
  //   filterString = filterString.trim();
  //   filterString = filterString.toLowerCase();
  //   this.dataSource.filter = filterString;
  // }

  getTaskListfromAPI(): Observable<ReviewerTaskList[]> {
    return Observable.of(testDatabase);
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  // get row data on click
  onRowClick(row: ReviewerTaskList) {
    console.log("Inside the on click row function");
    console.log("the value of the row clicked is: "+ JSON.stringify(row));
    this.router.navigate(['/coding_review/reviewer/info/'+ row["first_name"]+" "+row["last_name"]]);

  }
  // reads the checked input element and initiates function to filter the elements
   read_checks(){

      this.c=document.getElementById('new');
      this.d=document.getElementById('progress');
      if (this.c.checked) {
          
          if(this.d.checked){
            return this.checkbox_filter("")
          }
          return this.checkbox_filter("New")
        ;
      } 
        else if(this.d.checked){ 
          return this.checkbox_filter("In_Progress");
        }
        else {  
            return this.checkbox_filter("");
                 
      }
   
    }

    // Impliments filter as per the status
    checkbox_filter(check_value) {
      var input, filter, table, tr, td,td1,td2,td3, i;
      input = document.getElementById("search_input");
      filter = check_value.toUpperCase();
      table = document.getElementById("tb");
      tr = table.getElementsByTagName("mat-row");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("mat-cell")[0];
       
        
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
  
           }
            else {
            tr[i].style.display = "none";
          }
        } 
        
      }
    }

    // function which searches on the whole table 
  myFunction() {
    var input, filter, table, tr, td,td1,td2,td3, i;
    input = document.getElementById("search_input");
    filter = input.value.toUpperCase();
    if( filter != "" ){

    table = document.getElementById("tb");
    tr = table.getElementsByTagName("mat-row");

    for (i = 0; i < tr.length; i++) {
      if (tr[i].style.display != "none"){
      td = tr[i].getElementsByTagName("mat-cell")[1];
      td1 = tr[i].getElementsByTagName("mat-cell")[2];
      td2 = tr[i].getElementsByTagName("mat-cell")[3];
      td3 = tr[i].getElementsByTagName("mat-cell")[0];

      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }           
        else if(td1.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
         }
         else if(td2.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
         }
         else if(td3.innerHTML.toUpperCase().indexOf(filter) > -1) {

          tr[i].style.display = "";
         }
          else {
            tr[i].style.display = "none";
          
        }

      } 
    }
    }
  }
  else {
    this.read_checks()
  }
  }
}

const testDatabase:ReviewerTaskList[] = [
  new ReviewerTaskList(
    STATUS.NEW,
    "John",
    "Doe", 
    new Date("11/10/2017"),
   
  ),
  new ReviewerTaskList(
    STATUS.NEW,
    "Tom",
    "Smith", 
    new Date("011/01/2017"),
   
  ),
  new ReviewerTaskList(
    STATUS.IN_PROGRESS,
    "Jeff",
    "Jones", 
    new Date("12/03/2017"),
   
  ),
  new ReviewerTaskList(
    STATUS.IN_PROGRESS,
    "Tyson",
    "Taylor", 
    new Date("03/01/2018"),
   
  ),
  new ReviewerTaskList(
    STATUS.NEW,
    "Rock",
    "Roberts", 
    new Date("09/05/2017"),
   
  )
];