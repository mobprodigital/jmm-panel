import { Component, OnInit } from '@angular/core';
import { NavGroup, NavItem } from '../../../../modals/nav-item.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public navItemList : Array<NavGroup> = [];

  constructor() { }

  ngOnInit() {
    this.feedNavItems();
  }

  /**
   * FeedNavItems
   */
  public feedNavItems() {
    // dashboard
    this.navItemList.push(
      new NavGroup('Dashboard', [
        new NavItem('Dashboard', 'dashboard/dashbaord')
      ])
    );
    
    // campaigns
    this.navItemList.push(
      new NavGroup('Campaigns', [
        new NavItem('Manage campaigns', 'campaign/manage'),
        new NavItem('Tracking links', 'campaign/tracking-link'),
        new NavItem('Permission request', 'campaign/permission-request'),
        new NavItem('Create campaigns', 'campaign/create'),
        new NavItem('Campaigns categories', 'campaign/categories'),
        new NavItem('Creatives', 'campaign/creatives'),
      ])
    );
  }

}
