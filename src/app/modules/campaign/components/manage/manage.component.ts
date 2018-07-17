import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

export interface CampaignData {
  id: string;
  campaign: string;
  status: string;
  advertiser: string;
  category: string;
  visibility: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus'];
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  selection = new SelectionModel<CampaignData>(true, []);
  showSearch: boolean = false;
  displayedColumns: string[] = ['select', 'id', 'campaign', 'status', 'advertiser', 'category', 'visibility'];
  dataSource: MatTableDataSource<CampaignData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public router : Router) {

    // Create 100 campaigns
    const campaignData = Array.from({ length: 100 }, (_, k) => createNewCampaign(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(campaignData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * toggle the search card
   */
  togglesearch(): void {
    this.showSearch = !this.showSearch;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  viewCampaignInfo($e : MouseEvent, campaignId: string) {
    $e.preventDefault();
    this.router.navigateByUrl('/campaign/info/' + campaignId)
  }

}

/** Builds and returns a new User. */
function createNewCampaign(id: number): CampaignData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0);

  return {
    id: id.toString(),
    campaign: name,
    status: 'active',
    advertiser: 'test',
    category: 'gaming',
    visibility: 'public'
  };
}