import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bondlanding',
  templateUrl: './bondlanding.component.html',
  styleUrls: ['./bondlanding.component.scss']
})
export class BondLandingComponent implements OnInit {

  desc: string;

  constructor() { }

  ngOnInit() {
    this.desc = "Bond";
  }

}
