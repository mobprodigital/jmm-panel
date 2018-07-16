import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // lineChart
  public lineChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Click" },
    { data: [28, 48, 40, 19, 86, 27, 10], label: "Conversions" },
    { data: [25, 11, 50, 59, 88, 67, 99], label: "Impressions" },
    { data: [15, 38, 10, 19, 56, 88, 40], label: "Revenue" },
    { data: [66, 78, 40, 49, 86, 44, 66], label: "Payout" },
  ];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartLabels: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public lineChartType: string = 'line';

  constructor() { }


  ngOnInit() {
  }

}
