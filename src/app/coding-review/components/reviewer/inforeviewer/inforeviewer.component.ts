import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inforeviewer',
  templateUrl: './inforeviewer.component.html',
  styleUrls: ['./inforeviewer.component.scss']
})
export class InforeviewerComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute) {this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; // (+) converts string 'id' to a number
    // In a real app: dispatch action to load the details here.
 }); }

  ngOnInit() {

    
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
