import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  campaignId : number;
  trackingLinks : string[] = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];
  constructor(public activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      let _id : any = params.id;
      if(_id !== null || _id !== undefined){
        this.campaignId = parseInt(_id);
      }
    });
   }

  ngOnInit() {
  }

}
