import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";


@Component({
  selector: 'app-infocrtable',
  templateUrl: './infocrtable.component.html',
  styleUrls: ['./infocrtable.component.scss']
})
export class InfocrtableComponent implements OnInit {

  @Input() character: any;
  @Input() columns: string[];
  id: number;
  data_set: any;
  value: any;
  full_name:any;
  private sub: any;

  constructor(private route: ActivatedRoute,private _location: Location
  ) { }

  ngOnInit() {

    // ---------------------------------------------------------------------------------------------
this.data_set =[{"John Doe":[{ "Care Provider": "Aziz Douglas", "Date of Service": "12/02/2017", "Review Status": true },
    { "Care Provider": "ramo Douglas", "Date of Service": "18/02/2017", "Review Status": true },
    { "Care Provider": "Mark Edward", "Date of Service": "02/03/2017", "Review Status": true },
    { "Care Provider": "stepehn Douglas", "Date of Service": "15/03/2017", "Review Status": true },
    { "Care Provider": "Mark Edward", "Date of Service": "05/04/2017", "Review Status": true }]},{"Tom Smith":[{ "Care Provider": "Aziz Douglas", "Date of Service": "12/02/2017", "Review Status": true },
    { "Care Provider": "bric Douglas", "Date of Service": "18/02/2017", "Review Status": true },
    { "Care Provider": "jane Edward", "Date of Service": "02/03/2017", "Review Status": true },
    { "Care Provider": "jeff Douglas", "Date of Service": "15/03/2017", "Review Status": true },
    { "Care Provider": "Markus Edward", "Date of Service": "05/04/2017", "Review Status": true }]},{"Tyson Taylor":[{ "Care Provider": "Aziz Douglas", "Date of Service": "12/02/2017", "Review Status": true },
    { "Care Provider": "trano Douglas", "Date of Service": "18/02/2017", "Review Status": true },
    { "Care Provider": "sun Edward", "Date of Service": "02/03/2017", "Review Status": true },
    { "Care Provider": "moon Douglas", "Date of Service": "15/03/2017", "Review Status": true },
    { "Care Provider": "mars Edward", "Date of Service": "05/04/2017", "Review Status": true }]},{"Jeff Jones":[{ "Care Provider": "Aziz Douglas", "Date of Service": "12/02/2017", "Review Status": true },
    { "Care Provider": "pluto Douglas", "Date of Service": "18/02/2017", "Review Status": true },
    { "Care Provider": "popye Edward", "Date of Service": "02/03/2017", "Review Status": true },
    { "Care Provider": "johns Douglas", "Date of Service": "15/03/2017", "Review Status": true },
    { "Care Provider": "dwayne Edward", "Date of Service": "05/04/2017", "Review Status": true }]},{"Rock Roberts":[{ "Care Provider": "Aziz Douglas", "Date of Service": "12/02/2017", "Review Status": true },
    { "Care Provider": "bravo Douglas", "Date of Service": "18/02/2017", "Review Status": true },
    { "Care Provider": "jd Edward", "Date of Service": "02/03/2017", "Review Status": true },
    { "Care Provider": "kt Douglas", "Date of Service": "15/03/2017", "Review Status": true },
    { "Care Provider": "AB Edward", "Date of Service": "05/04/2017", "Review Status": true }]}]
// ---------------------------------------------------------------------------------------------

    this.columns = ["Care Provider", "Date of Service", "Review Status"]
  
     this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      
   });
    // alert(this.id);
    var value_list =[]
    for (let key in (this.data_set)) {
      this.value = (this.data_set)[key][this.id];
      if(this.value != undefined){
      value_list.push(this.value)
      }
   
      console.log(this.value)
      console.log(value_list)

    }
      this.character = value_list[0]
      console.log(this.character)
    
      
  }
  backClicked() {
    console.log("Inside the back button");
    this._location.back();
  }

}
